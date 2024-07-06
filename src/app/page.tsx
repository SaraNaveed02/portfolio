"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-screen">
      <div className=" flex  px-2 gap-10  ">
        {/* IMAGE CONTAINER */}
        <div className=" ">
          <Image src="/code.jpg" height={200} width={800} alt="programming" className="md:max-h-[800px]  lg:max-h-[400px] p-4 lg:max-w-[600px]  " />
        </div> 
        {/* IMAGE CONTAINER */}
        <div className="">
          <Image src={"/pro.webp"} alt="programing" height={400} width={500} className="md:hiiden p-4 max-h-[400px] lg:max-w-[400px]" />
          {/* BUTTONS */}
          </div>
        </div>
          <div className="p-5  gap-4 ">
            <button className="px-2 py-3 rounded-2xl ring-1 ring-black bg-black text-white font-bold text-sm">
              <Link href={'/portfolio'}>View My Work</Link>
            </button>
          </div>
      </div>
    </motion.div>
  );
}