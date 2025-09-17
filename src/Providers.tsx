"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import CartContextProviders from "./context/CartContext";
import WishListContextProviders from "./context/WishListContext";

const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SessionProvider>
      <CartContextProviders>
        <WishListContextProviders>{children}</WishListContextProviders>
      </CartContextProviders>
    </SessionProvider>
  );
};

export default Providers;
