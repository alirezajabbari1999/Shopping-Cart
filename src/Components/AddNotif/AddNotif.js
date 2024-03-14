import React, { useContext } from "react";
import "./AddNotif.css";
import { IoClose } from "react-icons/io5";
import productContext from "../../Context/ProductContext";

export default function AddNotif() {
  let contextData = useContext(productContext);

  const closeNotifHandler = () => {
    contextData.setShowNotif(false);
  };

  return (
    <div className="notif-container ">
      <div className={`${contextData.showNotif ? "show" : ""} notif`}>
        <span className="notif-text">
          محصول مورد نظر با موفقیت به سبد خرید افزوده شد
        </span>
        <IoClose
          className="close-notif-icon"
          onClick={() => closeNotifHandler()}
        />
      </div>
    </div>
  );
}
