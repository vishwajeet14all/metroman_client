import { useState } from "react";
import "./updateproduct.scss";

export default function Updateproduct() {
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
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setAddProduct((prevData) => ({
            ...prevData,
            image: reader.result,
          }));
        }
      };
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newValue = name === "price" ? parseFloat(value) : value;
    setAddProduct((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(addProduct);
  };

  return (
    <main className="container">
      <section>
        <strong>ID</strong>
        <img
          src={addProduct.image}
          alt="Product Img"
        />
        <p>Product Name: {addProduct.name}</p>
        <h3>Price: ₹{addProduct.price}</h3>
      </section>
      <div className="addModal">
        <form onSubmit={handleSubmit}>
          <h1>Update Product</h1>
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
            <textarea            
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
              type="number"
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
          {addProduct.image && (
            <img src={addProduct.image} alt="New Product " />
          )}
          <button className="btn btn-primary w-100">Update</button>
        </form>
      </div>
    </main>
  );
}
