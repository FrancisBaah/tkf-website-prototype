import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300">
      <div className="container mx-auto pt-8 mt-5 flex flex-col md:flex-row md:items-start items-center justify-evenly">
        <div className="mb-4">
          <h3 className="title font-bold">TKF Construction Company LLC</h3>
          <p className="detail">Building Dreams, Creating Futures</p>
        </div>

        <div className="flex flex-col detail mb-4">
        <Link className="footer-btn" href={"/"}>
            Home
          </Link>
          <Link className="footer-btn" href={"/About-Us"}>
            About Us
          </Link>
          <Link className="footer-btn" href={"/Services"}>
            Services
          </Link>
          <Link className="footer-btn" href={"/Projects"}>
            projects
          </Link>
          <Link className="footer-btn" href={"/Contact"}>
            Contact Us
          </Link>
        </div>

        <div className="flex flex-col detail mb-4">
          <Link href="#" className="footer-btn">Privacy Policy</Link>
          <Link href="#" className="footer-btn">Terms of Service</Link>
        </div>

        <div className='detail'>
          <p>&copy; {new Date().getFullYear()} TKF Construction Company LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
