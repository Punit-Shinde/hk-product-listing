import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";
const HomePage = () => {
  return (
    <>
      <div>Home Page</div>
      <NavBar />
      <SearchBar />
      <AddProduct />
      <ProductList />
    </>
  );
};

export default HomePage;
