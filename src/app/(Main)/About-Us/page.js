import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="p-3">
      <h1 className="title mb-6">Who is TKF?</h1>
      <div className="flex md:flex-row flex-col gap-4 h-full items-center mb-4">
        <Image
          src={"/dubai.png"}
          alt="dubai"
          width={500}
          className="w-full object-cover"
          height={500}
        />
        <div>
      <h2 className="detail font-bold mb-6 text-center">
        About TKF Construction Company LLC
      </h2>
          <p className="detail mb-4">
            TKF Construction Company LLC is a leading construction firm based in
            the vibrant city of Dubai, known for its commitment to excellence
            and innovation in the construction industry.
          </p>
          <p className="detail mb-4">
            With years of experience, TKF Construction has successfully
            delivered a wide range of construction projects, contributing to the
            modern skyline of Dubai. Our team of skilled professionals is
            dedicated to ensuring the highest standards of quality, safety, and
            sustainability in every project we undertake.
          </p>
          <p className="detail mb-4">
            At TKF Construction, we pride ourselves on our ability to
            collaborate with clients, architects, and stakeholders to bring
            visionary projects to life. Our unwavering commitment to customer
            satisfaction, coupled with a passion for excellence, has earned us a
            reputation as a trusted construction partner in the region.
          </p>
          <p className="detail mb-4">
            As we continue to grow, our focus remains on delivering cutting-edge
            construction solutions that not only meet but exceed the
            expectations of our clients. We look forward to contributing to the
            continued development and success of Dubai's thriving construction
            landscape.
          </p>
        </div>
      </div>
      <h2 className="title">Our Vision</h2>
      <p className="detail mb-8 text-center">
        At TKF Construction, we envision a perfect partnership where your dreams
        and our expertise converge to create something extraordinary.
        <br /> We are dedicated to transforming your vision into reality, step
        by step, brick by brick. <br /> Together, let's build spaces that not
        only reflect your aspirations but also stand as testaments to our
        commitment to quality and innovation.
      </p>
      <h1 className="title">Mission</h1>
      <p className="detail mb-6">
        As proud contributors to Dubai's skyline, TKF Construction is dedicated
        to shaping the city's future. Join us on a journey of transformative
        construction that elevates the urban landscape.
      </p>
    </div>
  );
};

export default page;
