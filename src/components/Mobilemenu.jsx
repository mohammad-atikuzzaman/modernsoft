"use client"
import {useState} from "react"
import Link from 'next/link';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { RiMenu3Fill } from "react-icons/ri";
import { RxCrossCircled } from "react-icons/rx";
import { usePathname } from "next/navigation";

const Mobilemenu = () => {
    const [displayMobileMenu, setDisplayMobileMenu]= useState(false)
    const path = usePathname()
    return (
        <div className="block md:hidden">
            <button onClick={()=>setDisplayMobileMenu(true)}><RiMenu3Fill className="text-2xl font-bold text-blue-600" /></button>
           {displayMobileMenu && <menu className="absolute top-0 right-0 bg-blue-600 min-h-screen pt-4 px-4 text-lg font-semibold text-white text-center z-50">
                <button onClick={()=> setDisplayMobileMenu(false)}  > <RxCrossCircled className="mx-auto text-3xl" /></button>
                <hr className="my-3" />
                <ul>
                    <li> <Link href="/" >Home</Link> </li>
                    <li> <Link href="/about">About</Link> </li>
                    <li> <Link href="/services">Services</Link> </li>
                    <li> <Link href="/projects">Projects</Link> </li>
                    <li> <Link href="/contacts">Contacts</Link> </li>
                    <li> <Link href="/blog">Blog</Link> </li>
                    <li> <Link href="https://www.facebook.com"> <FaFacebook className="mt-1 text-white text-lg mx-auto" /></Link> </li>
                    <li> <Link href="https://www.linkedin.com"> <FaLinkedin className="mt-1 text-white text-lg mx-auto" /></Link> </li>
                </ul>
            </menu>
            }
        </div>
    );
};

export default Mobilemenu;