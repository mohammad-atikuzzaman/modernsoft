import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#030938]">
      <footer className=" footer max-w-screen-xl mx-auto text-base-content p-10">
        <aside className="flex flex-col items-center">
        <Image className="rounded-full" src="/logo/modernsoft.png" alt="modernsoft" height={50} width={50}/>
          <p className="text-center font-semibold text-lg text-white">
          Modern Soft
            <br />
           Innovation
          </p>
        </aside>
        <nav className="text-gray-300">
          <h6 className="footer-title">Links</h6>
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="/about" className="link link-hover">
            About
          </Link>
          <Link href="/services" className="link link-hover">
            Services
          </Link>
          <Link href="/contacts" className="link link-hover">
            Contact Us
          </Link>
          <Link href="/projects" className="link link-hover">
            Projects
          </Link>
          <Link href="/blog" className="link link-hover">
            Blog
          </Link>
        </nav>
        <nav className="text-gray-300">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Web App Development</a>
          <a className="link link-hover">Mobile App Development</a>
          <a className="link link-hover">Cyber Security</a>
          <a className="link link-hover">Ui/Ux Designing</a>
          <a className="link link-hover">Digital Marketing</a>
        </nav>
        <nav className="text-gray-300">
          <h6 className="footer-title">Contact Us</h6>
          <a className="link link-hover">Mohammadpur, Dhaka-1207</a>
          <a className="link link-hover">+8801700000000</a>
          <a className="link link-hover">sadmansakib4112@gmail.com</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
