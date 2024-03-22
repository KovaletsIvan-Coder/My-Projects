import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./сomponent/Header/Header";
import Brands from "./сomponent/Brands/Brands";
import AppRouter from "./сomponent/AppRouter/AppRouter";
import Basket from "./сomponent/Basket/Basket";
import {
  amountItemInBasketContext,
  ulBasketContext,
  visibleBasketIconContext,
} from "./context";

function App() {
  const gettingItem = localStorage.getItem("elementsInBasket");
  const gettingItem2 = gettingItem ? JSON.parse(gettingItem) : [];
  const [elementsInBasket, setElementsInBasket] = useState(gettingItem2);
  const [amountItemInBasket, setAmountItemInBasket] = useState(0);
  const [visibleBasketIcon, setVisibleBasketIcon] = useState(true);

  useEffect(() => {
    //торимання кількості елементів в кошику
    const prevAmount = localStorage.getItem("itemInBasket") || 0;
    setAmountItemInBasket(+prevAmount);
  }, []);
  return (
    <visibleBasketIconContext.Provider
      value={{ visibleBasketIcon, setVisibleBasketIcon }}
    >
      <ulBasketContext.Provider
        value={{
          elementsInBasket,
          setElementsInBasket,
        }}
      >
        <amountItemInBasketContext.Provider
          value={{
            amountItemInBasket,
            setAmountItemInBasket,
          }}
        >
          <BrowserRouter>
            <Header />
            <Brands />
            {visibleBasketIcon && <Basket />}
            {/* розібратись як працює цей код зверху */}
            <AppRouter />
          </BrowserRouter>
        </amountItemInBasketContext.Provider>
      </ulBasketContext.Provider>
    </visibleBasketIconContext.Provider>
  );
}

export default App;
