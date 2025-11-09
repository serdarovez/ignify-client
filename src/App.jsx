import { div } from "framer-motion/client";
import React from "react";

export default function App() {
  return (
    <div className="send min-h-screen flex flex-col items-center justify-between font-inter">
      <div className="w-full flex-1 flex relative flex-col items-center justify-center text-white px-4">
        {/* Pill Tag */}
        <div className="border border-white rounded-full  px-7 py-3 text-[16px]">
          Ignify is launching soon
        </div>

        {/* Title */}
        <h1 className="text-[64px] mt-4  text-center font-sf-thin">
          Join our waitlist for
        </h1>

        <h2 className="text-[96px] font-bold text-center mt-2 font-bg">
          Ignify
        </h2>

        {/* Subtitle */}
        <p className=" text-center text-[36px]  text-white font-sf-bold">
          The all-in-one platform for booking, payments, and community
        </p>

        {/* Email Input */}
        <div className="mt-5 flex flex-col items-center gap-5 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-5 py-3 bg-transparent border placeholder-white border-white rounded-full text-center outline-none focus:ring-1 focus:ring-white"
          />

          <button className="px-6 py-3 cursor-pointer border border-white rounded-full hover:bg-white hover:text-black transition">
            Join the waitlist
          </button>
        </div>

        {/* Footer */}
      </div>
      <footer className="w-full text-center py-6 font-inter text-white">
        Copyright © {new Date().getFullYear()}
        {"\u00A0"}Ignify. All rights reserved.
      </footer>
    </div>
  );
}
