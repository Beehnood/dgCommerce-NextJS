"use client"

import Link from 'next/link';
import { HiShoppingBag } from "react-icons/hi";
import {useContext} from 'react';
import { ShopContext } from '@/context/shopContext';
const Nav = () => {
    const {state} = useContext(ShopContext)
    const itemCount = state.cartItems.reduce((prev , current)=> {
        return prev + current.count
    }, 0)
    return (
        <div className="bg-black text-white p-4">
            <div className="container flex justify-between mx-auto">
                <span className="navbar-brand">Dg Commerc</span>
                <ul className="flex items-center gap-2">
                    <li className="nav-item">
                       <Link href="/" className="nav-link">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/cart" className="flex items-center gap-1">
                            <HiShoppingBag />
                            {itemCount>0 && <span>{itemCount}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;
