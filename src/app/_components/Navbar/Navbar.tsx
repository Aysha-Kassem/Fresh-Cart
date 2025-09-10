"use client";
// next
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";

// images
import logo from "../../../../public/screens/freshcart-logo.svg";
import { IoMenuSharp } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-4 gap-5">
      <div className="flex justify-between items-center w-full md:w-auto gap-5">
        {/* Logo */}
        <Link href="/">
          <Image src={logo} alt="Logo" width={100} height={100} />
        </Link>

        {/* Menu Icon */}
        <IoMenuSharp
          className="text-3xl cursor-pointer md:hidden"
          onClick={() => setNav(!nav)}
        />
      </div>

      {nav && (
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 w-full md:gap-20">
          {/* Menu Links */}
          <div className="flex flex-col md:flex-row text-sm gap-5 font-medium w-full md:w-auto">
            <Link href="/cart">Cart</Link>
            <Link href="/cart">Wish List</Link>
            <Link href="/prodeuts">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/brands">Brands</Link>
          </div>
          {/* Social + Auth */}
          <div className="flex flex-col md:flex-row gap-5 w-full md:w-auto">
            <div className="flex flex-col gap-5">
              <Link href="/login">Login</Link>
              <Link href="/register">Register</Link>
            </div>

            <button className=" bg-green-800 text-white rounded-lg py-1 flex items-center justify-center">Sign Out</button>
            {/* icons */}
            <div className="flex gap-4 text-2xl justify-center items-center text-gray-600">
              <FaInstagram />
              <FaFacebook />
              <FaTiktok />
              <FaTwitter />
              <FaLinkedin />
              <FaYoutube />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
