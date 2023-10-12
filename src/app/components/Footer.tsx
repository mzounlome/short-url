"use client";

import { FC } from "react";
import Image from "next/image";
import facebook from "./images/icon-facebook.svg";
import instagram from "./images/icon-instagram.svg";
import pinterest from "./images/icon-pinterest.svg";
import twitter from "./images/icon-twitter.svg";
interface FooterProps {}
//
const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="w-full h-fit p-8 bg-black flex flex-col items-center desktop:flex-row">
      <h1 className="text-4xl text-white font-bold mb-10">Shortly</h1>
      <div className=" container h-44 flex flex-col items-center justify-evenly mb-8 desktop:mb-0">
        <h3 className="text-white">Features</h3>
        <button>
          <p className="text-gray-400">Link Shortening</p>
        </button>
        <button>
          <p className="text-gray-400">Branded Links</p>
        </button>
        <button>
          <p className="text-gray-400">Analytics</p>
        </button>
      </div>{" "}
      <div className=" container h-44 flex flex-col items-center justify-evenly mb-8 desktop:mb-0 ">
        <h3 className="text-white">Resources</h3>
        <button>
          <p className="text-gray-400">Blog</p>
        </button>
        <button>
          <p className="text-gray-400">Developers</p>
        </button>
        <button>
          <p className="text-gray-400">Support</p>
        </button>
      </div>{" "}
      <div className=" container h-44 flex flex-col items-center justify-evenly mb-8 desktop:mb-0">
        <h3 className="text-white">Resources</h3>
        <button>
          <p className="text-gray-400">About</p>
        </button>
        <button>
          <p className="text-gray-400">Our Team</p>
        </button>
        <button>
          <p className="text-gray-400">Careers</p>
        </button>
        <button>
          <p className="text-gray-400">Contact</p>
        </button>
      </div>
      <div className="flex justify-evenly container px-20 ">
        <Image width={30} height={30} src={facebook} alt="facebook" />
        <Image width={30} height={30} src={twitter} alt="facebook" />
        <Image width={30} height={30} src={pinterest} alt="facebook" />
        <Image width={30} height={30} src={instagram} alt="facebook" />
      </div>
    </div>
  );
};

export default Footer;
