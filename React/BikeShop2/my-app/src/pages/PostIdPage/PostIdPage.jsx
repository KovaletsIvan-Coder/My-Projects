import React, { useContext, useState, useEffect } from "react";
import "./PostIdPage.css";
import { amountItemInBasketContext, ulBasketContext } from "../../context";

const PostIdPage = () => {
  let { amountItemInBasket, setAmountItemInBasket } = useContext(
    amountItemInBasketContext
  );
  const { elementsInBasket, setElementsInBasket } = useContext(ulBasketContext);
  const [wheelsSelect, setWheelsSelect] = useState("26");
  const [frameSizeSelect, setFrameSizeSelect] = useState("S");
  const [identifier, setIdentifier] = useState(100);
  //100 для того щоб значення ідентифікатора на сторінці конкретного велосипеда відрізнялось від значення ідентифікатора на загальній сторінці байків
  //інакше це призведе до багу при видаленні елемента з кошика

  useEffect(() => {
    localStorage.setItem("elementsInBasket", JSON.stringify(elementsInBasket));
  }, [elementsInBasket]);

  const idBike = {
    name: localStorage.getItem("nameBike"),
    price: localStorage.getItem("priceBike"),
    src: localStorage.getItem("srcBike"),
    alt: localStorage.getItem("altBike"),
    id: localStorage.getItem("idBike"),
    description: localStorage.getItem("descriptionBike"),
    identifier: identifier,
    wheelsSize: wheelsSelect,
    frameSize: frameSizeSelect,
  };
  const updateBasketQuantityIdPage = (e) => {
    e.stopPropagation();

    setAmountItemInBasket((amountItemInBasket += 1));
    setIdentifier(identifier + 1);
    localStorage.setItem("itemInBasket", amountItemInBasket);

    // //set info about bike for basket
    setElementsInBasket((prevElements) => [...prevElements, idBike]);
  };
  return (
    <div className="main_container">
      <div className="img_container">
        <img className="img" src={idBike.src} alt={idBike.alt} />
      </div>
      <div className="bike_info_container">
        <h1>{idBike.name}</h1>
        <p>{idBike.description}</p>
        <form className="size_form">
          <p>Wheels: </p>
          <select
            className="wheels_size_select"
            onClick={(e) => e.stopPropagation()}
            value={wheelsSelect}
            onChange={(event) => setWheelsSelect(event.target.value)}
          >
            <option value="26">26</option>
            <option value="27.5">27.5</option>
            <option value="29">29</option>
          </select>

          <p className="p_size">Size: </p>
          <select
            className="size_select"
            onClick={(e) => e.stopPropagation()}
            value={frameSizeSelect}
            onChange={(event) => setFrameSizeSelect(event.target.value)}
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
        </form>

        <h4>Price: {idBike.price}$</h4>
        <button
          className="add_to_cart_btn"
          onClick={updateBasketQuantityIdPage}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default PostIdPage;
