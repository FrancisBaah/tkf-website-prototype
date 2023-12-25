import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <div className="h-full max-w-6xl m-auto mt-10">
      <div>
        <iframe
          className="w-full h-64"
          src="https://www.google.com/maps/"
          width="500"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex my-10 md:flex-row flex-col items-center justify-between">
        <div className="h-full md:w-[650px]">
          <div className="text-start flex">
            <MapPinIcon className="h-10 rounded-md p-2 text-sm mr-5" />
            <span>
              <h1 className="subtitle">Location:</h1>
              <p className="detail">Dubai, UAE</p>
            </span>
            <br />
          </div>
          <div>
            <div className="text-start flex my-5">
              <PhoneIcon className="h-10 rounded-md p-3 text-sm mr-5" />
              <span>
                <h5 className="subtitle">Call:</h5>
                <a className="mr-10 detail" href="tel:+971 50 667 7314">+971 50 667 7314</a>
              </span>
            </div>
            <div className="text-start flex">
              <EnvelopeIcon className="h-10 rounded-md p-3 text-sm mr-5" />
              <address id="contact">
                <h1 className="subtitle">Email:</h1>
                <a className="detail" href="mailto:email.co">company email
                </a>
              </address>
            </div>
          </div>
        </div>
        <div className="w-full">
        <form action="mailto:company@gmailco" method="POST" encType="text/plain" className="w-full flex flex-col p-4">
            <div className=" flex mb-3">
                <input placeholder="Name" name="Name" required type="text" className="border h-8 w-full rounded-sm"/>
                <input placeholder="number" name="Phone Number" required className="border w-full ml-5 h-8 rounded-sm"/>
            </div>
            <input placeholder="Topic" name="Topic" type="text" required className="border rounded-sm mb-3 h-8"/>
            <textArea placeholder="Message" name='Message' type="text" className="border rounded-sm h-20"/>
            <button
            className="header-btn rounded-lg p-1 m-5"
              htmlType="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
