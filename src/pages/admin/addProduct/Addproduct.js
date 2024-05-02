import { useState } from "react";
import { useNewProductsMutation } from "../../../redux/api/productApi";
import { useSelector } from "react-redux";
import { selectUserLoginData } from "../../../redux/slices/auth/authSlice";
import "./add.scss";
import { useNavigate } from "react-router-dom";
import { responseTost } from "../../../utils/features";

export default function Addproduct() {
  const user = useSelector(selectUserLoginData);
  const [newProduct] = useNewProductsMutation();
  const [addProduct, setAddProduct] = useState({
    productid: "",
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    imagePrev: null,
    video: "",
  });
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setAddProduct((prevData) => ({
            ...prevData,
            imagePrev: reader.result,
            image: file,
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", addProduct.name);
    formData.set("description", addProduct.description);
    formData.set("price", addProduct.price.toString());
    formData.set("category", addProduct.category);
    formData.set("image", addProduct.image);

    //!-> Iterate over FormData entries and log each key-value pair
    // for (const [key, value] of formData.entries()) {
    //   console.log(`${key}: ${value}`);
    // }
    // const formDataArray = Array.from(formData.entries());
    // const formDataMapped = formDataArray.map(
    //   ([key, value]) => `${key}: ${value}`
    // );
    // console.log(formDataMapped);

    const response = await newProduct({ authId: user.authId, formData });
    responseTost(response,navigate,"/layout/getallproducts")
    if (response) {
      console.log("newProduct ", response);
    }
  };

  return (
    <section className="container">
      <div className="addModal">
        <form onSubmit={handleSubmit}>
          <h1>Add New Product</h1>
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
          {addProduct.imagePrev && (
            <img src={addProduct.imagePrev} alt="New Product " />
          )}
          <button className="btn btn-primary w-100">Create</button>
        </form>
      </div>
    </section>
  );
}
