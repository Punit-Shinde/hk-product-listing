import React, { useState } from "react";
import AddProduct from "../components/AddProduct";
import SearchBar from "../components/SearchBar";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

const HomePage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  const handleAddProduct = (newProduct) => {
    const existingProduct = products.find(
      (product) => product.name === newProduct.name
    );

    if (!existingProduct) {
      setProducts([...products, newProduct]);
    } else {
      alert("Product already exists.");
    }
  };

  const handleSearch = (searchQuery) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="flex flex-col gap-5 bg-slate-200 h-screen">
      <SearchBar onSearch={handleSearch} />
      <AddProduct products={products} onAddProduct={handleAddProduct} />
      <ProductList products={products} />
      <MdLogout
        className="absolute top-8 right-5 text-xl text-white font-semibold"
        onClick={handleLogout}
      />
    </div>
  );
};

export default HomePage;
