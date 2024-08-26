"use client"
import React, { useContext } from 'react'
import ProductItem from './productItem'
import { ProductType } from '@/types/product'
import { ShopContext } from '@/context/shopContext'

type PropsType ={
  DATA: ProductType[]
}

export default function ProductsList({DATA : PRODUCTS}:PropsType) {
  const { state } = useContext(ShopContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 content-center justify-items-center py-4" >
            {state.productStock.map((productData) => {
                return <ProductItem key={productData.id} data={productData} />
            })}
        </div>
  )
}
