import React, { useContext } from "react";
import "./Product.css";
import productContext from "../../Context/ProductContext";

export default function Product({ title, infos }) {
  const contextData = useContext(productContext);

  const addToBasketHandler = (info) => {
    // مربوط به نمایش نوتیف بعد از کلیک بر روی دکمه اضافه کردن به سبد خرید
    contextData.setShowNotif(true);

    setTimeout(() => {
      contextData.setShowNotif(false);
    }, 3000);

    // مربوط به افزایش عدد تعداد محتویات سبد خرید
    contextData.setBasketCount((prevCount) => prevCount + 1);


    // مربوط به اضافه کردن محصول خریداری شده به سبد خرید در ساید بار

    let isInBasket = contextData.userShoppingBasket.some((product)=> product.title === info.title)
    if(!isInBasket){
      let newUserProductShopping = {
        id: contextData.userShoppingBasket.length + 1,
        title: info.title,
        price: info.price,
        image: info.image,
        count: 1
      }
      contextData.setUserShoppingBasket((prevProduct) => [...prevProduct,newUserProductShopping])
    }else{
      let newUserProductShopping = contextData.userShoppingBasket.map((basketProduct)=>{
        if(basketProduct.title === info.title){
          basketProduct.count++
        }
        return basketProduct
      })
      contextData.setUserShoppingBasket(newUserProductShopping)
    }
  };

  return (
    <div className="product-container">
      <h3 className="product-title">{title}</h3>

      <div className="products-row">
        {infos.map((info) => (
          <div className="product-box">
            <div className="product-image">
              <img src={info.image} alt="product image" />
            </div>
            <div className="product-info">
              <h6 className="product-name">{info.title}</h6>
              <span className="product-price">{info.price} $</span>
              <button
                className="add-product-btn"
                onClick={() => addToBasketHandler(info)}
              >
                Add To Card
              </button>
              <button className="more-info-btn">More Information</button>
              <span className="inventory-number">Inventory : {info.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
