import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="pt-3 pb-3 row">
          <span className={style.footer}>
            © 2020 - 2024,Metroman Vistas Corp. Ltd. All Rights Reserved I Privacy
            Policy I Disclaimer I metroman.com
          </span>
        </div>
      </div>
    </footer>
  );
}
