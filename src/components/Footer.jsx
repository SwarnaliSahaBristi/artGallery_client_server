import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { RiMessage2Line } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-black text-white p-5">
      <div className="flex justify-around flex-col md:flex-row">
        <div className="mt-14">
          <h1 className="font-bold text-4xl italic">Artify</h1>
          <p>A creative artwork showcase platform</p>
        </div>
        <div>
          <h1>About Us</h1>
          <p>
            <LuPhoneCall />
            +1 (800) 515 622 3122
          </p>
          <p>
            <RiMessage2Line />
            supportartify@gmail.com
          </p>
        </div>
        <div>
          <h1>Contact Us</h1>
          <div className="card bg-gray-800 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <input
                  type="text"
                  className="input text-black"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="input text-black"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="input text-black"
                  placeholder="Message"
                />
                <button className="btn button-gradient mt-4">Send</button>
              </fieldset>
            </div>
          </div>
        </div>
        <div>
            <h1>Social Links:</h1>
            <p><FaFacebook />www.artify.facebook.com</p>
            <p><FaSquareInstagram />www.artify.instagram.com</p>
            <p><FaXTwitter />www.artify.twitter.com</p>
        </div>
      </div>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
        <aside className="text-center">
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
