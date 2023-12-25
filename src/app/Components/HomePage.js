import React from "react";

const HomePage = () => {
  return (
    <div className="h-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="tkf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 text-white text-center h-full mt-[200px] bg-black/10">
        <h2 className="text-4xl font-bold mb-6">Welcome to TKF Construction</h2>
        {/* <p className="text-lg mb-8">
          Building the future of Dubai with innovation, quality, and dedication.
        </p>
        <p className=" text-white">our Trusted Partner in
          Building Dreams. We bring expertise, innovation, and quality to every
          project we undertake. Explore the possibilities with us.
        </p> */}
      </div>
    </div>
  );
};

export default HomePage;
