import React, { useContext } from "react";
import "./Sidebar.css";
import { IoClose } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import img1 from "./../../image/iphone15.webp";
import productContext from "../../Context/ProductContext";

export default function Sidebar() {
  const contextData = useContext(productContext);

  const closeSidebarHandler = () => {
    contextData.setShowSidebar(false);
  };

  return (
    <div
      className={`${contextData.showSidebar ? "show" : ""} sidebar-container`}
    >
      <div className="sidebar-title">
        <div className="left">
          <MdOutlineShoppingBag className="basket-icon" />
          <span className="title">Your Shopping Basket</span>
        </div>
        <div className="right">
          <IoClose
            className="close-icon"
            onClick={() => closeSidebarHandler()}
          />
        </div>
      </div>

      <div className="sidebar-content">
        {contextData.userShoppingBasket.map((product) => (
          <div className="product-box">
            <div className="product-image">
              <img src={product.image} alt="product image" />
            </div>
            <div className="product-info">
              <h6 className="product-name">{product.title}</h6>
              <span className="product-price">{product.price} $</span>

              <button className="more-info-btn">More Information</button>
              <span className="inventory-number">count : {product.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
