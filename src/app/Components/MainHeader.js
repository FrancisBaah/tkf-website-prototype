"use client";
import React, { useEffect, useRef, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeaderTitle from "./HeaderTitle";
import Footer from "./Footer";
import { usePathname } from 'next/navigation'
import { FaBars } from "react-icons/fa";

function MainHeader({ children }) {
  const pathname = usePathname()
  const [showBar, setShowBar] = useState(false)
  const divRef = useRef(null);

  const handleClickOutside = (event) => {
    if (divRef.current && !divRef.current.contains(event.target)) {
      setShowBar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showBar]);
  return (
    <>
    <section className="min-h-screen z-0 relative uppercase">
      <header className="z-20 bg-white sticky top-0 p-3 flex items-start justify-between shadow-lg mb-4">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2,
          }}
          className="flex flex-row items-center"
        >
          <Link href={"/"} className="w-10 h-10">
            <Image
              width={100}
              height={100}
              alt="tkf logo"
              src={"/tkf-logo.png"}
            />
          </Link>
        </motion.div>
          <FaBars onClick={()=>setShowBar(!showBar)} className="block text-[#191646] md:hidden right-7 top-5 text-2xl absolute"/>
        <motion.div ref={divRef}  className={`flex gap-3 md:space-x-7 ${showBar ? "flex-col border w-28 h-[200px] shadow-lg z-40 absolute right-14 bg-white" : "hidden md:block"}`}>
          <Link className="header-btn" href={"/"}>
            Home
          </Link>
          <Link className="header-btn" href={"/About-Us"}>
            About Us
          </Link>
          <Link className="header-btn" href={"/Services"}>
            Services
          </Link>
          <Link className="header-btn" href={"/Projects"}>
            projects
          </Link>
          <Link className="header-btn" href={"/Contact"}>
            Contact Us
          </Link>
        </motion.div>
        <motion.div
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex flex-row text-blue cursor-pointer"
        >
          <Link href={"/Projects"} className="items-center hidden md:inline-flex header-btn">
          HORIZON VENTURES REAL ESTATE
          </Link>
        </motion.div>
      </header>
      <main className="max-w-6xl mx-auto min-h-[450px]">
        <HeaderTitle/>{children}</main>
      <div className="z-20 sticky bottom-8 float-right">
        <SocialIcon
          url="https://wa.me/971506677314"
          className="cursor-pointer text-sm mx-2"
          target={"_blank"}
          network="whatsapp"
        />
      </div>
    </section>
    {pathname !== '/' && <Footer />}
    </>
  );
}

export default MainHeader;
