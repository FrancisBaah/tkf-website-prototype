import Link from "next/link";
import React from "react";
import { BuildingOffice2Icon } from "@heroicons/react/24/solid";
import { GiRailRoad, GiStoneTower  } from "react-icons/gi";
import Image from "next/image";
const HomePage = () => {
  return (
    <div className="h-screen w-screen top-0 left-0 overflow-hidden absolute">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="tkf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-screen h-screen bg-black/50 absolute left-0 top-0"></div>
      <div className="relative z-10 text-white text-center h-full mt-[200px]">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">
            Building the future of Dubai <br /> with innovation, quality, and
            dedication.
          </h2>
          {/* <p className="text-lg mb-8">
          Welcome to TKF Construction
        </p>
        <p className=" text-white">our Trusted Partner in
          Building Dreams. We bring expertise, innovation, and quality to every
          project we undertake. Explore the possibilities with us.
        </p> */}
          <div className="flex gap-8">
            <span className="w-14 h-14 bg-black/80 flex items-center justify-center group">
              <Link href={""} className="">
                <BuildingOffice2Icon className="w-8" />
                <p className="hidden group-hover:block hide">Building</p>
              </Link>
            </span>
            <span className="w-14 h-14 bg-black/80 flex items-center justify-center group">
              <Link href={""} className="">
                <GiStoneTower 
                  className="text-[30px]"
                />
                <p className=" hidden hide group-hover:block">Engineers</p>
              </Link>
            </span>
            <span className="w-14 h-14 bg-black/80 flex items-center justify-center group">
              <Link href={""} className="">
                <GiRailRoad className="text-[30px]" />
                <p className="hidden hide group-hover:block">Highway</p>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
