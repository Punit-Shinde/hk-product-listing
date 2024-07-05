import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="m-5 gap-2 font-semibold">
      {products.length === 0 ? (
        <p>No Product Found</p>
      ) : (
        <ul className="">
          {products.map((product) => (
            <li
              className="flex justify-between border-t-2 border-b-2 border-gray-400 p-1"
              key={product.name}
            >
              <h3>{product.name}</h3> <h3>$ {product.price}</h3>
              <h3 className="bg-red-600 flex justify-center items-center font-semibold text-lg text-slate-200 rounded-md px-2">
                X
              </h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
