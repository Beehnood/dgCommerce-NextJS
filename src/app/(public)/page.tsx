
import ProductsList from "@/components/products/productsList";
import { PRODUCTS } from '@/data/products';
import React from "react";


export default function Home() {
  return (
    <React.Fragment>
        <h1>Shop</h1>
        <ProductsList DATA={PRODUCTS} />
        
    </React.Fragment>
)
}
