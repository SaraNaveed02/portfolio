"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full ">
        <div className="  grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-2 justify-between  items-center gap-5 p-3  ">
          <div className=" ">
            <Link href={"https://github.com/SaraNaveed02/45-questions"}>
              <Image
                src={"/question.webp"}
                alt="45 questions"
                height={300}
                width={300}
                className="max-h-[200px] rounded-lg object-cover"
              />
              <p className="font-semibold p-2 text-white">45 Questions</p>
            </Link>
          </div>
          <div className="">
            <Link href={"https://github.com/SaraNaveed02/Calulator"}>
              <Image
                src={"/calculator.jpg"}
                alt="calculator"
                height={300}
                width={300}
                className="max-h-[200px] rounded-lg object-cover"
              />
              <p className="font-semibold p-2 text-white">Calculator</p>
            </Link>
          </div>
          <div className="">
            <Link href={"https://github.com/SaraNaveed02/AATM"}>
              <Image
                src={"/atm.jpg"}
                alt="ATM"
                height={300}
                width={300}
                className="max-h-[200px] object-cover rounded-lg"
              />
              <p className="font-semibold p-2  text-white">ATM</p>
            </Link>
          </div>
          <div className="">
            <Link href={"https://github.com/SaraNaveed02/Todo_App"}>
              <Image
                src={"/todo.jpg"}
                alt="Todo_List "
                height={300}
                width={300}
                className="max-h-[200px] object-cover rounded-lg"
              />
              <p className="font-semibold p-2 text-white">Todo_List</p>
            </Link>
          </div>
          <div className="">
            <Link href={"https://github.com/SaraNaveed02/countdown_timer"}>
              <Image
                src={"/count down.jpg"}
                alt="Count down "
                height={300}
                width={300}
                className="max-h-[200px] object-cover rounded-lg"
              />
              <p className="font-semibold p-2 text-white">Count Down</p>
            </Link>
          </div>
          <div className="r">
            <Link href={"https://github.com/SaraNaveed02/word_counter"}>
              <Image
                src={"/quiz.jpg"}
                alt="Count Word"
                height={300}
                width={300}
                className="max-h-[300px] object-cover rounded-lg"
              />
              <p className="font-semibold p-2  text-white">Word Counter</p>
            </Link>
          </div>
          <div className="">
            <Link href={"https://github.com/SaraNaveed02/currency_converter"}>
              <Image
                src={"/money.jpg"}
                alt="Currency Converter"
                height={300}
                width={300}
                className="max-h-[200px] object-cover rounded-lg"
              />
              <p className="font-semibold p-2 text-white">Currency Converter</p>
            </Link>
          </div>
          <div className=" ">
            <Link
              href={"https://github.com/SaraNaveed02/student_management_system"}
            >
              <Image
                src={"/school.jpg"}
                alt="Student Managemet System"
                height={300}
                width={300}
                className="max-h-[200px] object-cover rounded-lg"
              />
              <p className="font-semibold p-2 text-white">Student Managemet System</p>
            </Link>
          </div>
          <div className=" ">
            <Link href={"https://github.com/SaraNaveed02/Adventure-Game"}>
              <Image
                src={"/adventure.jpg"}
                alt="Adventure Game"
                height={300}
                width={300}
                className="max-h-[200px] object-cover rounded-lg"
              />
              <p className="font-semibold p-2 text-white ">Adventure Game</p>
            </Link>
          </div>
          <div className="">
            <Link href={"https://github.com/SaraNaveed02/Number_guessing_game"}>
              <Image
                src={"/guessing.jpg"}
                alt="Number guessing game"
                height={300}
                width={300}
                className="max-h-[200px] object-cover  rounded-lg"
              />
              <p className="font-semibold p-2  text-white">Number guessing game</p>
            </Link>
          </div>
          <div className="">
            <Link href={"https://github.com/SaraNaveed02/My_Bank"}>
              <Image
                src={"/mybank.jpg"}
                alt="My Bank"
                height={300}
                width={300}
                className="max-h-[200px] object-cover  rounded-lg"
              />
              <p className="font-semibold p-2 text-white">My Bank</p>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;
