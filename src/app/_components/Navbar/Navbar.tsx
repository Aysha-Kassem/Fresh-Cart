"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Link from "next/link";

// images
import logo from "../../../../public/screens/freshcart-logo.svg";

// icons
import { IoMenuSharp } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaShoppingCart,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// UI
import { Button } from "../../../components/ui/button";

// next auth
import { signOut, useSession } from "next-auth/react";

// page
import LodingPage from "../../loading";

// context
import { CartContext } from "../../../context/CartContext";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { status } = useSession();
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;
  const { numberOfCart } = cartContext;

  if (status === "loading") {
    return <LodingPage />;
  }

  return (
    <nav className="text-sm md:text-xs text-gray-900 flex flex-col md:flex-row justify-between items-center p-4 gap-5 px-16 md:px-10 bg-gray-50 fixed w-full z-10 shadow-md">
      <div className="flex justify-between items-center w-full md:w-auto gap-5">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>

        {/* Menu Icon (hidden on large screens) */}
        <IoMenuSharp
          className="text-3xl cursor-pointer md:hidden"
          onClick={() => setNav(!nav)}
        />
      </div>

      {/* Links + Auth + Social */}
      <div
        className={`
          ${nav ? "flex" : "hidden"}
          flex-col md:flex md:flex-row justify-between items-center gap-3 w-full md:gap-20
        `}
      >
        {/* Menu Links */}
        {status === "authenticated" && (
          <div className="flex flex-col md:flex-row gap-3 font-medium w-full md:w-auto">
            <Link
              className="hover:border-green-800 hover:border-b"
              href="/cart"
            >
              Cart
            </Link>
            <Link
              className="hover:border-green-800 hover:border-b"
              href="/wish-list"
            >
              Wish List
            </Link>
            <Link
              className="hover:border-green-800 hover:border-b"
              href="/prodeuts"
            >
              Products
            </Link>
            <Link
              className="hover:border-green-800 hover:border-b"
              href="/categories"
            >
              Categories
            </Link>
            <Link
              className="hover:border-green-800 hover:border-b"
              href="/brands"
            >
              Brands
            </Link>
          </div>
        )}

        {/* Social + Auth */}
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            {status === "unauthenticated" && (
              <>
                <Link
                  className="hover:border-green-800 hover:border-b"
                  href="/login"
                >
                  Login
                </Link>
                <Link
                  className="hover:border-green-800 hover:border-b"
                  href="/register"
                >
                  Register
                </Link>
              </>
            )}
            {status === "authenticated" && (
              <div className="flex flex-col md:flex-row items-center gap-5">
                {/* Cart with badge */}
                <div className="relative text-2xl">
                  <FaShoppingCart className="text-green-800" />
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {numberOfCart > 0 ? numberOfCart : "0"}
                  </span>
                </div>

                {/* Sign Out */}
                <Button
                  className="bg-green-800 hover:bg-green-700 text-white"
                  onClick={() =>
                    signOut({
                      callbackUrl: "/login",
                    })
                  }
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>

          {/* Social icons (hidden on desktop) */}
          <div className="flex gap-4 text-lg justify-center items-center text-black md:hidden">
            <FaInstagram />
            <FaFacebook />
            <FaTiktok />
            <FaTwitter />
            <FaLinkedin />
            <FaYoutube />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
