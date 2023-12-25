"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

function MainHeader() {
  return (
    <header className="max-w-6xl mx-auto z-20 h-screen relative uppercase">
      <div className="sticky top-0 p-5 flex items-start justify-between ">
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
          <Image
            className="w-10 h-10 rounded-full"
            width={100}
            height={100}
            alt="tkf logo"
            src={"/tkf-logo.jpeg"}
          />
        </motion.div>
        <motion.div className="flex gap-3">
            <Link className="header-btn" href={""}>Home</Link>
            <Link className="header-btn" href={""}>About Us</Link>
            <Link className="header-btn" href={""}>Contact Us</Link>
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
          {/* <SocialIcon
          url="mailto:brightglobal11@gmail.com"
          className="cursor-pointer text-sm mx-2"
          network="email"
          bgColor="#FFC50C"
          fgColor="#4E2A8C"
        /> */}

          <p className="items-center hidden md:inline-flex text-sm">
            Get in Touch
          </p>
        </motion.div>
      </div>
      <div className=" absolute bottom-2 right-0">
      <SocialIcon
        url="https://wa.me/971506677314"
        className="cursor-pointer text-sm mx-2"
        target={"_blank"}
        network="whatsapp"
      /></div>
    </header>
  );
}

export default MainHeader;
