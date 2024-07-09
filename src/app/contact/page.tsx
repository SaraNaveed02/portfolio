"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  const text = "Say Hello";
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row  ">
        <div className="h-full lg:w-1/2 lg:h-screen flex items-center justify-center text-4xl">
          <motion.div className="inline-flex ">
            {text.split("").map((letter, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.1,
                  }}
                >
                  {letter}
                </motion.span>
              );
            })}
            <Image src={"/smile.png"} alt="smile" width={20} height={24} />
          </motion.div>
        </div>
        <form action={'https://formspree.io/f/movaqgbk'} method="POST">
          <div className="h-full lg:h-full md:h-full lg:ml-28 lg:w-1/2 pt-10 pb-2 rounded-xl text-xl flex flex-col gap-7 justify-center   ">
            <h1 className="text-4xl font-light text-center ">Contact</h1>
            <div className=" text-center">
              <input
                required
                type="text"
                placeholder="Name"
                className="bg-slate-300 px-14  py-3 rounded-lg   text-black"
              />
            </div>
            <div className="text-center ">
              <input
                required
                type="email"
                placeholder="Email"
                className="bg-slate-300 px-14 py-3 rounded-lg  text-black"
              />
            </div>
            <div className="text-center">
              <textarea
                required
                id="message"
                name="message"
                placeholder="Mesage"
                className="bg-slate-300 p-3 text-black rounded-lg  w-96 outline-none resize-none"
                rows={6}
              />
            </div>
            <div className="text-center lg:ml-20">
              <button className="ring-1 ring-black rounded-md bg-slate-600 py-3 px-2 w-56 text-center">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
