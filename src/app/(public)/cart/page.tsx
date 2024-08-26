"use client"
import React, { useContext } from 'react'
import {ShopContext} from '@/context/shopContext'
import { PRODUCTS } from '@/data/products'
import { ProductType } from '@/types/product'
import ProductItem from '@/components/products/productItem'


const Cart =()=>{
 
  const {state} = useContext(ShopContext)
    
    return(
        <React.Fragment>
             <h1>Your Cart's Items</h1>
             <div>
                {PRODUCTS.map((p:ProductType)=>{
                    if(state.cartItems.some((i)=>i.id === p.id && i.count>0))
                    return <ProductItem data={p}/>
                })}
             </div>
        </React.Fragment>
    )
}
export default Cart;