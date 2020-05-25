module.exports = async (req, res, next) => {
  if (req.session.role === "admin") {
    next();
  } else {
    res.status(418).send("User is not an Admin user.");
  }
};
