"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeaderTitle from "./HeaderTitle";

function MainHeader({ children }) {
  return (
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
          <div className="w-10 h-10">
            <Image
              width={100}
              height={100}
              alt="tkf logo"
              src={"/tkf-logo.jpeg"}
            />
          </div>
        </motion.div>
        <motion.div className="flex gap-3">
          <Link className="header-btn" href={"/"}>
            Home
          </Link>
          <Link className="header-btn" href={"/About-Us"}>
            About Us
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
          {/* <SocialIcon
          url="mailto:brightglobal11@gmail.com"
          className="cursor-pointer text-sm mx-2"
          network="email"
          bgColor="#FFC50C"
          fgColor="#4E2A8C"
        /> */}

          <p className="items-center hidden md:inline-flex header-btn">
            Visit our real estate
          </p>
        </motion.div>
      </header>
      <main className="max-w-6xl mx-auto min-h-[200px]">
        <HeaderTitle/>{children}</main>
      <div className="z-20 sticky bottom-2 float-right">
        <SocialIcon
          url="https://wa.me/971506677314"
          className="cursor-pointer text-sm mx-2"
          target={"_blank"}
          network="whatsapp"
        />
      </div>
    </section>
  );
}

export default MainHeader;
