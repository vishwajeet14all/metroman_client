import "./loader.scss";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loader() {
  return (
    <div className="container">
      <Skeleton count={15} />
    </div>
  );
}
