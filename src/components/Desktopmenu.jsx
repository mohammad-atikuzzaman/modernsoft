"use client"

import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Desktopmenu = () => {
    const path = usePathname()
    console.log(path)
  return (
    <menu className="hidden md:flex gap-16 items-center">
      <ul className="flex gap-4">
        <li>
          <Link href="/" className={`${path === "/" && "text-blue-600 font-semibold"}`}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={`${path === "/about" && "text-blue-600 font-semibold"}`}>About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/">Projects</Link>
        </li>
        <li>
          <Link href="/">Contacts</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <li>
          <Link href="/">
            <FaFacebook className="mt-1 text-blue-600 text-lg" />
          </Link>
        </li>
        <li>
          <Link href="/">
            <FaLinkedin className="mt-1 text-blue-600 text-lg" />
          </Link>
        </li>
      </ul>
      <button className="bg-blue-600 text-white font-semibold btn">
        Get in Touch
      </button>
    </menu>
  );
};

export default Desktopmenu;
