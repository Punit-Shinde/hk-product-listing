import React from "react";
import NotFound from "../assets/nopage.png";

const ProductList = ({ products, onRemoveProduct }) => {
  return (
    <div className="m-24 gap-2 font-semibold">
      {products.length === 0 ? (
        <div className="flex flex-col items-center m-7">
          <img
            src={NotFound}
            alt="No Product Image"
            className="w-48 animate-bounce"
            title="Add Product ASAP !!!"
          />
          <p>No Product Found</p>
        </div>
      ) : (
        <ul className="border-2 border-b-0 border-slate-400 rounded-t-lg">
          {products.map((product) => (
            <li
              className="flex justify-between border-b-2 border-gray-400 p-1"
              key={product.name}
            >
              <h3>{product.name}</h3> <h3>$ {product.price}</h3>
              <button
                className="bg-red-600 flex justify-center items-center font-semibold text-lg text-slate-200 rounded-md px-2"
                onClick={() => onRemoveProduct(product.name)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
