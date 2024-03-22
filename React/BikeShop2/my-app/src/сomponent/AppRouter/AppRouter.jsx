import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/NavigationPages/HomePage";
import Shops from "../../pages/NavigationPages/ShopsPage";
import Contacts from "../../pages/NavigationPages/Contacts";
import AboutUs from "../../pages/NavigationPages/AboutUs";
import Trek from "../../pages/BrandsPage/Trek";
import Specialized from "../../pages/BrandsPage/Specialized";
import Giant from "../../pages/BrandsPage/Giant";
import Canyon from "../../pages/BrandsPage/Canyon";
import Dartmoor from "../../pages/BrandsPage/Dartmoor";
import YT from "../../pages/BrandsPage/YT";
import Bergamount from "../../pages/BrandsPage/Bergamount";
import PostIdPage from "../../pages/PostIdPage/PostIdPage";
import BasketPage from "../../pages/BasketPage/BasketPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/homePage" element={<HomePage />}></Route>
      <Route path="/shops" element={<Shops />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>

      <Route path="/Trek" element={<Trek />}></Route>
      <Route path="/Specialized" element={<Specialized />}></Route>
      <Route path="/Giant" element={<Giant />}></Route>
      <Route path="/Canyon" element={<Canyon />}></Route>
      <Route path="/Dartmoor" element={<Dartmoor />}></Route>
      <Route path="/YT" element={<YT />}></Route>
      <Route path="/Bergamount" element={<Bergamount />}></Route>

      <Route path="/posts/:id" element={<PostIdPage />}></Route>
      <Route path="/basket" element={<BasketPage />}></Route>

      <Route path="*" element={<HomePage />}></Route>
    </Routes>
  );
};

export default AppRouter;
