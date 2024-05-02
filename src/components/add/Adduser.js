import { useState } from "react";
import "./add.scss";

export default function Addproduct(props) {
  const [addProduct, setAddProduct] = useState({
    productid: "",
    name: "",
    description: "",
    price: "",
    category: "",
    video: "",
    image: null,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setAddProduct((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log({ name, type });
    setAddProduct((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addProduct);
  };
  const formData = new FormData();    
      formData.append("image", addProduct.image);

  return (
    <div className="add">
      <div className="addModal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          <div className="item">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="name"
              name="name"
              value={addProduct.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="description"
              name="description"
              value={addProduct.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="">Price</label>
            <input
              type="text"
              placeholder="price"
              name="price"
              value={addProduct.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="">Category</label>
            <input
              type="text"
              placeholder="category"
              name="category"
              value={addProduct.category}
              onChange={handleChange}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              id="image"
              placeholder="Image"
              onChange={handleImageChange}
              required
            />
          </div>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
