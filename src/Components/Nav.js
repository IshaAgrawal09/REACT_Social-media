import React from "react";
import { Link } from "react-router-dom";
import CartContext from "./Context";
import { useContext } from "react";
const Nav = () => {
  const { loggedUser } = useContext(CartContext);
  return (
    <div className="nav">
      <div className="logo">
        <img src="logo2.jpeg" alt="" />
      </div>
      <div className="nav-item">
        <i className="fa-solid fa-message" title="Messages">
          <span>1</span>
        </i>

        <i className="fa-solid fa-bell" title="Notifications">
          <span>3</span>
        </i>

        <a href="#" id="userAnchor">
          <i className="fa-solid fa-user" title="User" id="userNameNav"></i>
          <span id="loggedUser">{loggedUser}</span>
        </a>
      </div>
      <Link to="/">
        <button id="logout">LOGOUT</button>
      </Link>
    </div>
  );
};

export default Nav;
