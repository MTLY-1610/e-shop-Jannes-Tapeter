const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  },
});

const { addImage, getImage } = require("../controllers/imageController");

router.use(express.json());

//Register new customer
router.post("/", upload.single("image"), addImage);

//Get an image
router.get("/:id", getImage);

module.exports = router;
