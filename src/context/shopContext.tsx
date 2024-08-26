"use client";

import React, { Dispatch, createContext, useReducer } from "react";
import { PRODUCTS } from "@/data/products";
import { StaticImageData } from "next/image";
import { ProductType } from "@/types/product";


type CartItemType = {
  id: number;
  count: number;
};
type StateType = {
  productStock: ProductType[];
  cartItems: CartItemType[];
};
type ActionType =
  | { type: "ADD_TO_CART"; itemId: number }
  | { type: "REMOVE_FROM_CART"; itemId: number }
  | { type: "INIT_STOCK" };

const initialState: StateType = {
  productStock: PRODUCTS,
  cartItems: [],
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const productIndex = state.productStock.findIndex((item) => item.id === action.itemId);
      const product = state.productStock[productIndex];

      if (product && product.quantity > 0) {
        const existingCartItem = state.cartItems.find((item) => item.id === action.itemId);
        
        const updatedCartItems = existingCartItem
          ? state.cartItems.map((item) =>
              item.id === action.itemId ? { ...item, count: item.count + 1 } : item
            )
          : [...state.cartItems, { id: action.itemId, count: 1 }];
        
        const updatedProductStock = [...state.productStock];
        updatedProductStock[productIndex].quantity -= 1;

        return {
          ...state,
          cartItems: updatedCartItems,
          productStock: updatedProductStock,
        };
      } else {
        alert("La quantité de cet article n'est plus suffisante.");
        return state;
      }
    }

    case "REMOVE_FROM_CART": {
      const cartItemIndex = state.cartItems.findIndex((item) => item.id === action.itemId);
      const cartItem = state.cartItems[cartItemIndex];

      if (cartItem && cartItem.count > 0) {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === action.itemId ? { ...item, count: item.count - 1 } : item
        );

        const updatedProductStock = [...state.productStock];
        const productIndex = updatedProductStock.findIndex((item) => item.id === action.itemId);
        updatedProductStock[productIndex].quantity += 1;

        return {
          ...state,
          cartItems: updatedCartItems,
          productStock: updatedProductStock,
        };
      }
      return state;
    }

    case "INIT_STOCK":
      return { ...state, productStock: PRODUCTS };

    default:
      return state;
  }
};

export const ShopContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const ShopContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShopContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopContext.Provider>
  );
};