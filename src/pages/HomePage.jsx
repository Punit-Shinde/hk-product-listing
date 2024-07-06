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
      <div className="md:mx-80">
        <AddProduct products={products} onAddProduct={handleAddProduct} />
        <ProductList products={products} />
      </div>
      <MdLogout
        className="absolute top-7 right-5 text-4xl text-white border-2 w-[35px] h-[35px] p-1 rounded-full hover:scale-125 cursor-pointer bg-blue-600 duration-500"
        onClick={handleLogout}
      />
    </div>
  );
};

export default HomePage;
