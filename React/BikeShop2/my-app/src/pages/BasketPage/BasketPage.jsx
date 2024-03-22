import React, { useContext, useState, useEffect } from "react";
import {
  ulBasketContext,
  amountItemInBasketContext,
  visibleBasketIconContext,
} from "../../context";
import "./BasketPage.css";

const BasketPage = () => {
  let { amountItemInBasket, setAmountItemInBasket } = useContext(
    amountItemInBasketContext
  );
  let { elementsInBasket, setElementsInBasket } = useContext(ulBasketContext);
  let { setVisibleBasketIcon } = useContext(visibleBasketIconContext);
  const [newArray, setNewArray] = useState(elementsInBasket);

  useEffect(() => {
    setVisibleBasketIcon(false);
    return () => {
      setVisibleBasketIcon(true);
    };
  });

  useEffect(() => {
    localStorage.setItem("elementsInBasket", JSON.stringify(newArray));
  }, [newArray]);
  console.log(newArray);

  // видалення елемента
  const removeElement = (currElem) => {
    setNewArray(
      newArray.filter(
        (element) =>
          element.identifier !== currElem.identifier ||
          element.name !== currElem.name
      )
    );
    if ((newArray.length = 0)) {
      setElementsInBasket([]);
    } //ця перевірка попереджає появу предметів які вже видалені з кошика,після повторного переходу на сторінку кошика
    setAmountItemInBasket((amountItemInBasket -= 1));
    localStorage.setItem("itemInBasket", amountItemInBasket);
  };

  //визначення загальної суми
  const totalPrice = newArray.reduce((acumulator, current) => {
    return acumulator + parseFloat(current.price);
  }, 0);
  //повідомлення про пустий кошик
  if (newArray.length === 0) {
    return <h1 className="empty_basket">Cart is empty</h1>;
  }

  return (
    <>
      <div className="label_container">
        <div className="label">Item</div>
        <div className="label">Price</div>
        <div className="label">Quantity</div>
      </div>

      <ul>
        {newArray.map((item, index) => (
          <li key={index} className="basket_item_li">
            <section>
              <img className="basket_item_img" src={item.src} alt="" />
              <h4>
                {item.name}
                <p className="p_size_basket">Wheels:{item.wheelsSize}</p>
                <p className="p_size_basket">Size:{item.frameSize}</p>
              </h4>
            </section>

            <section>
              <h4>{item.price}$</h4>
            </section>

            <section>
              <button
                onClick={() => removeElement(item)}
                className="btn_remove"
              >
                Remove
              </button>
            </section>
          </li>
        ))}
      </ul>
      <div className="total_container">
        {" "}
        <h2 className="total_price">Total:{totalPrice}</h2>
      </div>
    </>
  );
};

export default BasketPage;
