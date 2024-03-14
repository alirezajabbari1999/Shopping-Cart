import React, { useContext } from "react";
import "./Navbar.css";
import { MdOutlineShoppingBag } from "react-icons/md";
import productContext from "../../Context/ProductContext";

export default function Navbar() {
  const contextData = useContext(productContext);

  const openSidebarHandler = () => {
    contextData.setShowSidebar(true);
  };

  return (
    <div className="Navbar-container">
      <div className="navbar-left">
        <div className="navbar-logo">
          <span>My Website</span>
        </div>
        <div className="navbar-menu">
          <ul>
            <li>Home</li>
          </ul>
        </div>
      </div>

      <div className="navbar-right">
        <MdOutlineShoppingBag
          className="basket-icon"
          onClick={() => openSidebarHandler()}
        />
        <span className="basket-number">{contextData.basketCount}</span>
      </div>
    </div>
  );
}
