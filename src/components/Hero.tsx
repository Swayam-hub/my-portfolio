"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="h-screen font-bold flex items-center justify-center text-center">
        <div className="text-4xl grid grid-cols-3 gap-4 items-center justify-center max-w-4xl">
          <Image
            src="/me.jpg"
            alt="me"
            width={300}
            height={300}
            className="rounded-full border-4 border-purple"
          />
          <div className="col-span-2">
            <TextGenerateEffect
              words="Hello I'm Swayam Budhiraja"
              className="text-4xl mb-3"
            />
            Turning Ideas Into Interactive
            <p className="text-purple">Web Experiences</p>
            <p className="text-base mt-3 font-normal">
              I bring ideas to life with dynamic web solutions. Specializing in
              JavaScript, I craft interactive, efficient, and user-friendly
              websites that leave a lasting impression. Let's turn your vision
              into reality!
            </p>
            <div className="text-base mt-3 flex flex-row items-center justify-center">
              <button className="bg-purple p-3 mr-3 rounded-lg flex flex-row items-center justify-center hover:bg-white hover:text-slate-950">Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="h-auto ml-1 !w-6 md:!w-4"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
                ></path>
              </svg>
              </button>
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
