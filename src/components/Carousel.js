import React from "react";
import style from "./Carousel.module.css";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className={`carousel-item active ${style.customItem}`}>
            <img
              src="https://i.ibb.co/xzGPMhY/pexels-photo-2219024.jpg"
              className={`d-block w-100 ${style.customImage}`}
              alt="..."
            />
          </div>
          <div className={`carousel-item ${style.customItem}`}>
            <img
              src="https://i.ibb.co/6PJkq7L/company.jpg"
              className={`d-block w-100 ${style.customImage}`}
              alt="..."
            />
          </div>
          <div className={`carousel-item ${style.customItem}`}>
            <img
              src="https://i.ibb.co/4YMCgRv/Image-For-Article-7959-1.webp"
              className={`d-block w-100 ${style.customImage}`}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
