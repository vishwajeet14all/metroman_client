import { Outlet } from "react-router-dom";
import Menu from "../../components/adminMenu/Menu";
import "../../sass/global.scss";

export default function Layout() {
  return (
    <div className="main">
      <div className="containerSass">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
