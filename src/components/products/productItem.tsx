"use client";

import { ShopContext } from "@/context/shopContext";
import React, { useContext } from "react";

type PropsType = {
  data: any;
};

export default function ProductItem({ data }: PropsType) {
  const { id, productName, productImage, price, quantity } = data;
  const { state, dispatch } = useContext(ShopContext);

  const isInCart = state.cartItems?.some((item: any) => item.id === id);

  const itemInCart = state.cartItems.find((item: any) => item.id === id);

  return (
    <div>
      <img src={productImage} alt={productName} className="w-[300px]" />
      <h3>{productName}</h3>
      <p>Price: {price}$</p>
      <p>Quantity: {quantity}</p>
      <button
        className="btn btn-info btn-sm"
        onClick={() => dispatch({ type: "ADD_TO_CART", itemId: id })}
      >
        +
      </button>
      <span className="mx-1">{itemInCart ? itemInCart.count : null}</span>
      {isInCart && (
        <button
          className="btn btn-info btn-sm"
          onClick={() => dispatch({ type: "REMOVE_FROM_CART", itemId: id })}
        >
          -
        </button>
      )}
    </div>
  );
}
