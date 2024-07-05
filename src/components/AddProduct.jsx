import React, { useState } from "react";
import { MdAddBox } from "react-icons/md";

const AddProduct = ({ products, onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    if (productName && price) {
      const newProduct = { name: productName, price: parseFloat(price) };

      const existingProduct = products.find(
        (product) => product.name === newProduct.name
      );

      if (!existingProduct) {
        onAddProduct(newProduct);
        setProductName("");
        setPrice("");
      } else {
        alert("Product already exists.");
      }
    } else {
      alert("Please enter valid product details.");
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center m-5 gap-2">
      <input
        type="text"
        placeholder="Product name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        className="border-2 border-slate-400 outline-none rounded-lg p-2"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border-2 border-slate-400 outline-none rounded-lg p-2"
      />
      <MdAddBox
        onClick={handleAddProduct}
        className="text-4xl text-emerald-500"
      />
    </div>
  );
};

export default AddProduct;
