'use client'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import {motion} from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const topVariants = {
    // If it is close we are not going to have any rotation
    closed: {
      rotate:0,
    },

    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255, 255)"
    }
  }
    const centerVariants = {
      closed:{
        opacity:1, //visible
      },
      opened:{
        opacity:0, //invisible
      }
    }

     const bottomVariants = {
      closed:{
        rotate:0, 
      },
      opened:{
        rotate: -45,
        backgroundColor: "rgb(255, 255, 255, 255)"
      }
     } 


  
  return (
    
      <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* Medium Menu */}
        <div className="hidden md:flex gap-4">
          {links.map((link, index) => (
            <NavLink link={link} key={index}>{link.title}</NavLink>
          ))} 
        </div>
        {/* LOGO */}
        <div className="md:hidden lg:flex xl:w-1/3 bg-pink-300 justify-center xl:justify-center ">
          <Link
            href="/"
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
          >
            <span className="text-white mr-1">Alvin</span>
            <span className="bg-white text-black w-12 flex items-center justify-center">.dev</span>
          </Link>
        </div>
        {/* social media icons */}
        <div className="hidden md:flex gap-4">
          <Link href="#">
            <Image src="/images/facebook.png" width={24} height={24} alt="Facebook" />
          </Link>
          <Link href="#">
            <Image src="/images/dribbble.png" width={24} height={24} alt="Dribble" />
          </Link>
          <Link href="#">
            <Image src="/images/github.png" width={24} height={24} alt="github" />
          </Link>
          <Link href="#">
            <Image src="/images/instagram.png" width={24} height={24} alt="instagram" />
          </Link>
          <Link href="#">
            <Image src="/images/pinterest.png" width={24} height={24} alt="pinterest" />
          </Link>
          <Link href="#">
            <Image src="/images/linkedin.png" width={24} height={24} alt="linkedln" />
          </Link>
          <Link href="#">
            <Image src="/images/dribbble.png" width={24} height={24} alt="Dribble" />
          </Link>
        </div>
        {/* Rightmost Menu Button */}
        <div className="md:hidden">
          {/* Menu "burger "button */}
          <button  className="w-10 h-8 flex rounded-md flex-col justify-between z-50 relative"
            onClick={() => setOpen(!open)}> 
            <motion.div variants={topVariants} 
                        animate={open ? "opened" : closed}
                        className="w-10 h-1 bg-black rounded"></motion.div>
            <motion.div variants={centerVariants} 
                        animate={open ? "opened" : closed}
                        className="w-10 h-1 bg-black rounded"></motion.div>
            <motion.div variants={bottomVariants }
                        animate={open ? "opened" : closed}    
                        className="w-10 h-1 bg-black rounded"></motion.div>
          </button>
        </div>
        {/* Menu List */}
        {open && ( 
          <div className="absolute text-white bg-black w-screen h-screen top-0 right-0 flex flex-col items-center justify-center gap-8 text-4xl">
          {links.map((link, index) => (
            <Link key={index} href={link.url}>
              {link.title}
            </Link>
          ))}
        </div>
        )}        
      </div>    
  );
  
}

export default Navbar;