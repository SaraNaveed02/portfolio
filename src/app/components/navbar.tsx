"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-full  flex items-center justify-between text-xl ring-1 ring-slate-700 rounded-b-lg shadow-white">
      {/* NAvBAR */}
      <div className="flex ">
        <Image src={"/port.png"} alt="profolio" width={30} height={40} className="max-h-[]" />
        <p className="font-bold place-content-end   ">rotfoliohub</p>
      </div>
      <div className="text-sm  font-light lg:text-xl m-2 p-2">
        <ol className="flex gap-4  ">
          <Link href={"/"} className="">
            <li className="hover:underline ">Home</li>
          </Link>
          <Link href={"/about"}>
            <li className="hover:underline ">About</li>
          </Link>
          <Link href={"/portfolio"}>
            <li className="hover:underline ">Portfolio</li>
          </Link>
        </ol>
      </div>
      <div className="">
        {/* SOCIAL */}
        <div className="hidden md:flex gap-4">
          <Link href={"www.youtube.com/@SaraNaveed-dp7gm"}>
            <Image src={"/you.png"} alt="youTube" width={40} height={40} />
          </Link>
          <Link href="https://www.instagram.com">
            <Image src="/insta.png" height={40} width={40} alt="intagram" />
          </Link>
          <Link href="https://www.linkedin.com/in/sara-naveed-2102a42b6/">
            <Image src="/linkdin.png" height={40} width={40} alt="linkdln" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61556625239013">
            <Image src="/fb.png" height={40} width={40} alt="fb" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
