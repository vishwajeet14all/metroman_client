import style from "./Copywrite.module.css";
import { Link } from "react-router-dom";

export default function Copywrite() {
  return (
    <footer>
      <div className="container">
        <div className="pt-3 pb-3 row">
          <span className={style.footer}>
            <span> © 2024 MetroManCastingYards. All Rights Reserved </span>I{" "}
            <span>
              <Link to="/privacypolicy" className={style.link}>
                Privacy Policy
              </Link>
            </span>{" "}
            I{" "}
            <span>
              <Link to="/disclaimer" className={style.link}>
                {" "}
                Disclaimer
              </Link>
            </span>{" "}
            I{" "}
            <span>
              <Link to="https://metroman.org" className={style.link}>
                {" "}
                metroman.org{" "}
              </Link>
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
