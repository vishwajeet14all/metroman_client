import "./menu.scss";
import { Link, useLocation } from "react-router-dom";
import { menu } from "../../data";

export default function Menu() {
  const location = useLocation();
  return (
    <>
      <div className="menu">
        {menu.map((item) => (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <Link
                style={{
                  backgroundColor: location.pathname.includes(listItem.url)
                    ? "rgba(0,115,255,0.1)"
                    : "white",
                }}
                to={listItem.url}
                className="listItem"
                key={listItem.id}
              >
                <i className={listItem.icon}></i>
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
