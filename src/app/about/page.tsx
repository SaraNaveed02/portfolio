"use client";
import React from "react";
import { motion } from "framer-motion";
const Aboutpage = () => {
  return (
    <div>
      <motion.div
        className="h-full"
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1 }}
      >
        {/* CONTAINER */}
        <div className="h-full  lg:flex">
          {/* TEXT CONTAINER */}
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-20  md:gap-32 lg:gap-48 xl:gap-64 text-white  lg:pr-0 lg:w-2/3 xl:1/2">
            {/* BIOGRSPHY CONTAINER */}
            <div className="flex flex-col gap-12 justify-center">
              {/* BIOGRSPHY TITLE */}
              <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
              {/* BIOGRSPHY DESC */}
              <p className="text:lg">
              I am a front-end web developer with expertise in website development.</p>
              {/* BIOGRSPHY SIGN SVG */}
              <div className=""></div>
              {/* BIOGRSPHY SCROLL SVG */}
              <svg
                className="self-end"
                width="145"
                height="150"
                viewBox="0 0 154 157"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector 7"
                  d="M2 84.2732C7.03291 84.2732 11.3447 83.2307 16.2222 81.3843C30.4966 75.9808 44.4624 68.7601 53.6667 56.1621C59.1626 48.6398 62.4057 39.0601 64.8889 30.1621C65.4445 28.1713 68.3371 6.4456 64.2222 16.1066C56.9179 33.2559 46.0773 49.6166 42.7778 68.1621C42.2786 70.968 37.8279 90.0106 45 88.1621C49.9571 86.8845 55.2289 84.1237 59.2222 80.9399C61.3444 79.2479 61 78.0679 61 81.3288C61 87.2515 62.1305 85.317 65.7778 81.9399C66.9354 80.8681 68.0417 84.7269 70 85.1621C72.5804 85.7355 73.0691 88.3979 75 88.4399C103.015 89.0489 128.324 59.1092 142.556 38.8288C148.673 30.1115 154.426 16.2069 150 5.27323C148.102 0.585211 145.835 1.04337 144.944 5.9399C142.193 21.0715 133.784 35.3698 128.111 49.551C122.719 63.0322 116.576 76.0704 111.556 89.7177C106.012 104.786 98.9825 118.413 97 134.273"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  id="Vector 8"
                  d="M95 136.298C95.3441 129.417 99.4846 122.003 102.778 116.076C103.314 115.111 104 111.218 104 113.965C104 119.814 104.338 125.578 104.778 131.409C104.822 131.99 105.787 139.251 104 138.52C98.8881 136.429 94.2106 132.936 89.2222 130.52C87.7606 129.812 79.2952 126.984 79.4444 124.298C79.5332 122.7 87.5759 122.612 88.5556 122.52C91.4725 122.246 118.556 123.679 118.556 120.52C118.556 119.408 115.044 122.041 115 122.076C110.203 125.836 106.1 130.35 101.222 134.076C95.5924 138.376 91.1182 143.78 85.5556 148.076C82.5782 150.375 78.6953 151.907 77 155.298"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
            </div>

            {/* SKILLS CONTAINER */}
            <div className="flex flex-col gap-5 justify-center pb-5">
              {/* SKILLS TITLE */}
              <h1 className="font-bold text-2xl">SKILLS</h1>
              <div>
                
                {/* SKILLS LIST ITEM */}
                <div className="flex justify-between h-20">
                  {/* LEFT */}
                  <div className="w-1/3">
                    {/* SKILLS TITLE  */}
                    <div className="bg-[#6A89A7] w-fit p-3 font-semibold rounded-b-lg rounded-s-lg ">
                      HTML
                    </div>
                  </div>
                  {/* CENTER*/}
                  <div className="w-1/6 ">
                    {/* LINE */}
                    <div className="w-1 h-full bg-white rounded relative ">
                      {/* LINE CIRCLE*/}
                      <div className="absolute w-3 h-3 rounded-full ring-2 ring-blue-200 bg-[#010117] -left-1"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 "></div>
                </div>

                {/* SKILLS LIST ITEM */}
                <div className="flex justify-between h-20">
                  {/* LEFT */}
                  <div className="w-1/3"></div>
                  {/* CENTER*/}
                  <div className="w-1/6 ">
                    {/* LINE */}
                    <div className="w-1 h-full bg-white rounded relative ">
                      {/* LINE CIRCLE*/}
                      <div className="absolute w-3 h-3 rounded-full ring-2 ring-blue-200 bg-[#010117] -left-1"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 ">
                    {/* SKILLS TITLE  */}
                    <div className="bg-[#6A89A7] w-fit p-3 font-semibold rounded-b-lg rounded-e-lg ">
                      CSS
                    </div>
                  </div>
                </div>
                {/* SKILLS LIST ITEM */}
                <div className="flex justify-between h-20">
                  {/* LEFT */}
                  <div className="w-1/3">
                    {/* SKILLS TITLE  */}
                    <div className="bg-[#6A89A7] w-fit p-3 font-semibold rounded-b-lg rounded-s-lg ">
                      Nextjs
                    </div>
                  </div>
                  {/* CENTER*/}
                  <div className="w-1/6 ">
                    {/* LINE */}
                    <div className="w-1 h-full bg-white rounded relative ">
                      {/* LINE CIRCLE*/}
                      <div className="absolute w-3 h-3 rounded-full ring-2 ring-blue-200 bg-[#010117] -left-1"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 "></div>
                </div>
                {/* SKILLS LIST ITEM */}
                <div className="flex justify-between h-20">
                  {/* LEFT */}
                  <div className="w-1/3"></div>
                  {/* CENTER*/}
                  <div className="w-1/6 ">
                    {/* LINE */}
                    <div className="w-1 h-full bg-white rounded relative ">
                      {/* LINE CIRCLE*/}
                      <div className="absolute w-3 h-3 rounded-full ring-2 ring-blue-200 bg-[#010117] -left-1"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 ">
                    {/* SKILLS TITLE  */}
                    <div className="bg-[#6A89A7] w-fit p-3 font-semibold rounded-b-lg rounded-e-lg ">
                      TypeScript
                    </div>
                  </div>
                </div>
                {/* SKILLS LIST ITEM */}
              <div className="flex justify-between h-20">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* SKILLS TITLE  */}
                  <div className="bg-[#6A89A7] w-fit p-3 font-semibold rounded-b-lg rounded-s-lg ">
                    Tailwind CSS
                  </div>
                </div>
                {/* CENTER*/}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-white rounded relative ">
                    {/* LINE CIRCLE*/}
                    <div className="absolute w-3 h-3 rounded-full ring-2 ring-blue-200 bg-[#010117] -left-1"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* SKILLS LIST ITEM */}
              <div className="flex justify-between h-20">
                  {/* LEFT */}
                  <div className="w-1/3"></div>
                  {/* CENTER*/}
                  <div className="w-1/6 ">
                    {/* LINE */}
                    <div className="w-1 h-full bg-white rounded relative ">
                      {/* LINE CIRCLE*/}
                      <div className="absolute w-3 h-3 rounded-full ring-2 ring-blue-200 bg-[#010117] -left-1"></div>
                    </div>
                  </div>
                  {/* RIGHT */}
                  <div className="w-1/3 ">
                    {/* SKILLS TITLE  */}
                    <div className="bg-[#6A89A7] w-fit p-3 font-semibold rounded-b-lg rounded-e-lg ">
                      sanity CMS
                    </div>
                  </div>
                </div>
                    {/* SKILLS LIST ITEM */}
              <div className="flex justify-between h-20">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* SKILLS TITLE  */}
                  <div className="bg-[#6A89A7] w-fit p-3 font-semibold rounded-b-lg rounded-s-lg ">
                    JavaScript
                  </div>
                </div>
                {/* CENTER*/}
                <div className="w-1/6 ">
                  {/* LINE */}
                  <div className="w-1 h-full bg-white rounded relative ">
                    {/* LINE CIRCLE*/}
                    <div className="absolute w-3 h-3 rounded-full ring-2 ring-blue-200 bg-[#010117] -left-1"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Aboutpage;
