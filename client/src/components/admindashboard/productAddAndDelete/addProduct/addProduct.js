import React, { useState } from "react";
import "./addProduct.css";
import {
  TextField,
  Button,
  Input,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import axios from "axios";

const AddProduct = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [product, setProduct] = useState({
    category: [],
    quantity: 0,
    url: "",
    price: 0,
    description: "",
    brand: "",
    designer: "",
    ref: "",
    dimensions: "",
  });

  const fileSelectedHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("image", selectedFile);
    axios
      .post("http://localhost:5000/upload", fd)
      .then((res) => setProduct({ ...product, url: res.data.img }));
  };

  const getCheckBoxesValues = () => {
    const inputs = document.getElementsByTagName("input");

    for (const input of inputs) {
      if (input.type === "checkbox" && input.checked) {
        product.category.push(input.value);
      }
    }
  };

  const addProduct = () => {
    getCheckBoxesValues();
    axios
      .post("http://localhost:5000/product", product)
      .then((res) => console.log(res));
  };

  return (
    <form id="a-form" noValidate autoComplete="off">
      <Input style={{ margin: ".5rem 0" }} className="a-form-input-image" name="image" type="file" onChange={fileSelectedHandler} />
      <Button style={{ margin: ".5rem 0" }}
        onClick={fileUploadHandler}
        id="a-adminButton"
        size="small"
        variant="contained"
      >
        Ladda upp bild
      </Button>

      {product.url && (
        <img alt="" src={`http://localhost:5000/${product.url}`} />
      )}

      <TextField style={{ margin: ".5rem 0" }}
        id="a-outlined-basic"
        label="Märke"
        variant="outlined"
        name="brand"
        type="text"
        placeholder="Märke"
        onChange={(event) =>
          setProduct({ ...product, brand: event.target.value })
        }
      />
      <TextField style={{ margin: ".5rem 0" }}
        id="a-outlined-basic"
        label="Designer"
        variant="outlined"
        name="designer"
        type="text"
        onChange={(event) =>
          setProduct({ ...product, designer: event.target.value })
        }
      />
      <TextField style={{ margin: ".5rem 0" }}
        id="a-outlined-basic"
        label="Ref"
        variant="outlined"
        name="ref"
        type="text"
        onChange={(event) =>
          setProduct({ ...product, ref: event.target.value })
        }
      />
      <TextField style={{ margin: ".5rem 0" }}
        id="a-outlined-basic"
        label="Mått"
        variant="outlined"
        name="dimensions"
        type="text"
        onChange={(event) =>
          setProduct({ ...product, dimensions: event.target.value })
        }
      />

      <TextField style={{ margin: ".5rem 0" }}
        className="a-outlined-multiline-flexible"
        label="Beskrivning"
        variant="outlined"
        name="description"
        type="text"
        multiline
        rowsMax={10}
        onChange={(event) =>
          setProduct({ ...product, description: event.target.value })
        }
      />
      <TextField style={{ margin: ".5rem 0" }}
        id="a-outlined-basic"
        label="Pris"
        variant="outlined"
        name="price"
        type="number"
        onChange={(event) =>
          setProduct({ ...product, price: event.target.value })
        }
      />

      <TextField style={{ margin: ".5rem 0" }}
        id="a-outlined-basic"
        label="Antal"
        variant="outlined"
        name="quantity"
        type="number"
        onChange={(event) =>
          setProduct({ ...product, quantity: event.target.value })
        }
      />

      <FormControlLabel
        control={<Checkbox name="CheckboxCategoryPattern" color="default" />}
        label="Mönster"
        value="pattern"
        labelPlacement="end"
      />
      <FormControlLabel
        control={<Checkbox name="CheckboxCategoryPhoto" color="default" />}
        label="Foto"
        value="photo"
        labelPlacement="end"
      />
      <FormControlLabel
        control={<Checkbox name="checkboxCategoryChildren" color="default" />}
        label="Barnrum"
        value="children"
        labelPlacement="end"
      />
      <Button
        onClick={addProduct}
        id="a-adminButton"
        size="small"
        variant="contained"
      >
        Lägg till produkt
      </Button>
    </form>
  );
};

export default AddProduct;
