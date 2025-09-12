"use client";
// next
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

// images
import logo from "../../../../public/screens/freshcart-logo.svg";
import { IoMenuSharp } from "react-icons/io5";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

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
        <div className="flex flex-col md:flex-row gap-3 font-medium w-full md:w-auto">
          <Link className="hover:border-green-800 hover:border-b" href="/cart">Cart</Link>
          <Link className="hover:border-green-800 hover:border-b" href="/cart">Wish List</Link>
          <Link className="hover:border-green-800 hover:border-b" href="/prodeuts">Products</Link>
          <Link className="hover:border-green-800 hover:border-b" href="/categories">Categories</Link>
          <Link className="hover:border-green-800 hover:border-b" href="/brands">Brands</Link>
        </div>

        {/* Social + Auth */}
        <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <Link className="hover:border-green-800 hover:border-b" href="/login">Login</Link>
            <Link className="hover:border-green-800 hover:border-b" href="/register">Register</Link>
          </div>

          <button className="bg-green-800 hover:bg-green-700 text-white rounded-lg py-1 px-4 flex items-center justify-center">
            Sign Out
          </button>

          {/* icons */}
          <div className="flex gap-4 text-lg justify-center items-center text-black">
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
