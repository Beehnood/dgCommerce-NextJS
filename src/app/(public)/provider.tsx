"use client"
import { ShopContextProvider } from '@/context/shopContext';
import { FC, PropsWithChildren } from "react";

interface ProvidersProps extends PropsWithChildren {}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return <ShopContextProvider>{children}</ShopContextProvider>;
}

export default Providers;