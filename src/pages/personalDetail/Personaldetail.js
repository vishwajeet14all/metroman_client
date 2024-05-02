import { useState } from "react";
import style from "./Personaldetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { savePersonalDetail } from "../../services/api";
import Copywrite from "../../components/copyWrite/Copywrite";

export default function Personaldetail() {
  

  const [formData, setFormData] = useState({
    image: "",
    firstname: "",
    lastname: "",
    email: "",
    date: "",
    gender: "",
    profession: "",
    address: "",
  });
  //setting form data
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  //submiting form data
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    // console.log(token);
    await savePersonalDetail(formData, token);
  };
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="d-flex justify-content-between p-3 border border-secondary">
              <div>
                <i className="bi bi-person-lines-fill"></i> Personal Details{" "}
              </div>
              <div>
                <i className="bi bi-caret-right-fill"></i>
              </div>
            </div>
            <div className="d-flex justify-content-between p-3 border border-secondary">
              <div>
                <i class="bi bi-wallet-fill"></i> Commission{" "}
              </div>
              <div>
                <i class="bi bi-currency-rupee"></i>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <h2>Personal Details</h2>
            <p>Tell us a bit about your self</p>

            <form onSubmit={handleSubmit}>
              <div className="mb-3 p-1">
                <div className={style.btn}>
                  <span>
                    <FontAwesomeIcon icon={faCamera} />
                  </span>
                </div>
              </div>

              <div className={`row mb-3 g-3 ${style.formRow}`}>
                <div className="col-md-6">
                  <label className="form-label">First Name</label>
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={`row mb-3 g-3 ${style.formRow}`}>
                <div className="form-group col-md-6">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label className="form-label">Date of Birth </label>
                  <input
                    type="date"
                    className="form-control"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className={`row mb-3 g-3 ${style.formRow}`}>
                <div className="form-group col-md-6">
                  <label className=" form-label">Gender</label>
                  <select
                    name="gender"
                    id=""
                    className="form-group form-select"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-group col-md-6">
                  <label className="form-label">Profession</label>
                  <select
                    name="profession"
                    id=""
                    className="form-select"
                    value={formData.profession}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Dealer">Dealer</option>
                    <option value="Seller">Seller</option>
                    <option value="Customer">Customer</option>
                  </select>
                </div>
              </div>
              <div className={`mb-3 {style.formRow}`}>
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-5 text-end">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <Copywrite />
      </div>
    </section>
  );
}
