import style from "./SingleBanner.module.css";
import React from "react";

export default function SingleBanner() {
  return (
    <>
      <div className={`${style.outerImageDiv}`}>
        <img
          src="https://i.ibb.co/41vY1Vr/data-privacy.jpg"
          alt="Banner"
          className={style.image}
        />
      </div>
    </>
  );
}
