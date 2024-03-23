import React from 'react'
import "./menu.scss";
import { Link } from "react-router-dom";
import { menu } from "../../data";

export default function Menu() {
  return (
    <>
      <div className="menu">
        {menu.map((item) => (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <Link to="/" className="listItem" key={listItem.id}>
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
