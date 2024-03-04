import React from "react";
import style from "./Copywrite.module.css";

export default function Copywrite() {
  return (
    <footer>
      <div className="container">
        <div className="pt-3 pb-3 row">
          <span className={style.footer}>
            © 2020 - 2024 ,Metroman Ltd. All Rights Reserved I Privacy
            Policy I Disclaimer I metroman.org
          </span>
        </div>
      </div>
    </footer>
  );
}
