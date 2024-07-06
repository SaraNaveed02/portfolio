"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return ( 
  <div className="h-full flex items-center justify-between text-xl ring-1 ring-slate-700 rounded-b-lg shadow-white">
           {/* NAvBAR */}
      <div className="text-sm  font-light lg:text-xl m-2 p-2">
        <ol className="flex gap-4  ">
          <Link href={'/'} className="">
             <li>
              Home
             </li>
          </Link>
          <Link href={'/about'}>
             <li>
              About
             </li>
          </Link>
          <Link href={'/portfolio'}>
             <li>
             Portfolio
             </li>
          </Link>
        </ol>
      </div>
      <div className="">

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4">
        <Link href="/">
          <Image src="/portf.jpg" height={40} width={40} alt="logo" />
        </Link>
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
