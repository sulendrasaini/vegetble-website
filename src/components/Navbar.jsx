import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

import { IoHeart } from "react-icons/io5";
import { IoBagHandle } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";
  import { TbMenu3 } from "react-icons/tb";
const Navbar = () => {
     
    const [showMenu, setShowMenu] = useState(false) 

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect (() =>{

      const handleScroll = ()=>{
        // console.log(window.scrollY);
        setIsScrolled(window.scrollY > 10)
      }

      window.addEventListener("scroll", handleScroll)
      return ()=>{window.removeEventListener("scroll", handleScroll);} ;

    },[])

  return (
    <>
      <header className={`fixed bg-gradient-to-b from-green-100 to-green-50 top-0 right-0 left-0  z-[9999] ${isScrolled ? "drop-shadow-[0_4px_25px_rgba(0,0,0,.3)]" :  " "} transition duration-300` }>
        <nav className={`max-w-[1400px] mx-auto  px-10 md:h-[12vh] h-[10vh]  items-center flex justify-between`}>
          {/* Logo */}
          <a href="#" className="md:text-5xl text-4xl font-bold">
            Gr<span className="text-green-800 uppercase ">O</span>cify
          </a>
          {/* Destop Menu */}
          <ul className="md:flex gap-x-15 text-xl font-semibold tracking-widest text-zinc-800 hidden ">
            <li className="hover:scale-102">
              <a href="#" className="text-green-800 ">
                Home
              </a>
            </li>
            <li className="hover:scale-102">
              <a href="#" className="hover:text-green-800">
                About Us
              </a>
            </li >
            <li className="hover:scale-102">
              <a href="#" className="hover:text-green-800">
                Process
              </a>
            </li>
            <li className="hover:scale-102">
              <a href="#" className="hover:text-green-800">
                Contect Us
              </a>
            </li>
          </ul>
          {/* Nav-Search */}
          <div className="flex items-center gap-5">
            {/* Input-field */}
            <div className="border-2 border-green-800 p-2 rounded-full md:flex hidden">
              <input
                className="self-center text-zinc-900 px-4 flex-1 h-[4vh] focus:outline-none"
                type="search"
                placeholder="Search..."
                autoComplete="off"
              />
              <button className=" rounded-full text-white w-10 h-10 items-center flex justify-center text-xl hover:scale-110 bg-gradient-to-b from-green-800 to-green-600 cursor-pointer">
                <IoSearchSharp className="" />
              </button>
            </div>

            <a href="#" className="text-zinc-800 text-3xl hover:scale-120">
              <IoHeart />
            </a>
            <a href="#" className="text-zinc-800 text-3xl hover:scale-120">
              <IoBagHandle />
            </a>


            
            {/*###################### Humburger ###########################*/}
           <a href="# " className="text-zinc-800 text-3xl  md:hidden " onClick={()=>setShowMenu(!showMenu)}> {showMenu ? <TbMenu3 /> : <TbMenu2 />}</a>

         


          </div>

          {/***** Mobile Menu ******/}
          <ul className={`py-10 px-5 flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-lg rounded-2xl text-xl font-semibold tracking-widest text-zinc-800 md:hidden absolute top-30 -left-1/2 -translate-x-1/2 ${showMenu ? "left-1/2" : ""} transition-all duration-500 items-center `}>
            <li>
              <a href="#" className="text-green-800">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-800">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-800">
                Process
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-800">
                Contect Us
              </a>
            </li>
             {/* Input-field */}
            <li className="border-3 border-green-800 p-1 rounded-full flex">
              <input
                className="pl-5 text-zinc-900 flex-1 h-[4vh] focus:outline-none"
                type="search"
                placeholder="Search..."
                autoComplete="off"
              />
              <button className="cursor-pointer rounded-full text-white w-10 h-10 items-center flex justify-center text-xl bg-gradient-to-b from-green-800 to-green-600">
                <IoSearchSharp />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
