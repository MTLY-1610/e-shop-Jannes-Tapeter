import React, { useState } from "react";
import axios from "axios";
import { Input, FormGroup, Checkbox } from "@material-ui/core";

const Test = () => {
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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Input name="image" type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload File</button>
      {product.url && <img src={`http://localhost:5000/${product.url}`} />}
      <Input
        name="price"
        type="number"
        placeholder="Price"
        onChange={(event) =>
          setProduct({ ...product, price: event.target.value })
        }
      />
      <Input
        name="quantity"
        type="number"
        placeholder="Quantity"
        onChange={(event) =>
          setProduct({ ...product, quantity: event.target.value })
        }
      />
      <Input
        name="description"
        type="text"
        placeholder="Description"
        onChange={(event) =>
          setProduct({ ...product, description: event.target.value })
        }
      />
      <Input
        name="brand"
        type="text"
        placeholder="Brand"
        onChange={(event) =>
          setProduct({ ...product, brand: event.target.value })
        }
      />
      <Input
        name="designer"
        type="text"
        placeholder="Designer"
        onChange={(event) =>
          setProduct({ ...product, designer: event.target.value })
        }
      />
      <Input
        name="ref"
        type="text"
        placeholder="Ref"
        onChange={(event) =>
          setProduct({ ...product, ref: event.target.value })
        }
      />
      <Input
        name="dimensions"
        type="text"
        placeholder="Dimensions"
        onChange={(event) =>
          setProduct({ ...product, dimensions: event.target.value })
        }
      />
      <FormGroup>
        <Checkbox
          className="checkBox"
          value="pattern"
          inputProps={{ "aria-label": "Mönster" }}
        />
        <Checkbox
          className="checkBox"
          value="photo"
          inputProps={{ "aria-label": "Foto" }}
        />
        <Checkbox
          className="checkBox"
          value="children"
          inputProps={{ "aria-label": "Barn" }}
        />
      </FormGroup>
      <button onClick={addProduct}>Lägg till produkt</button>
    </div>
  );
};

export default Test;
