"use client"

import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Desktopmenu = () => {
  const path = usePathname()
  return (
    <menu className="hidden md:flex gap-16 items-center">
      <ul className="flex items-center gap-4 text-gray-500 font-semibold">
        <li>
          <Link href="/" className={`${path==="/" && "font-semibold text-base text-blue-500"}`}>Home</Link>
        </li>
        <li>
          <Link href="#about" >About</Link>
        </li>
        <li>
          <Link href="#services">Services</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contacts">Contacts</Link>
        </li>
        <li>
          <Link href="#blog">Blog</Link>
        </li>
        <li>
          <Link href="https://www.facebook.com">
            <FaFacebook className="mt-1 text-blue-600 text-lg" />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com">
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
