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
    <div className="container h-fit p-8 bg-black flex flex-col items-center">
      <h1 className="text-4xl text-white font-bold mb-10">Shortly</h1>
      <div className=" container h-44 flex flex-col items-center justify-evenly mb-8">
        <h3 className="text-white">Features</h3>
        <p className="text-gray-400">Link Shortening</p>
        <p className="text-gray-400">Branded Links</p>
        <p className="text-gray-400">Analytics</p>
      </div>{" "}
      <div className=" container h-44 flex flex-col items-center justify-evenly mb-8">
        <h3 className="text-white">Resources</h3>
        <p className="text-gray-400">Blog</p>
        <p className="text-gray-400">Developers</p>
        <p className="text-gray-400">Support</p>
      </div>{" "}
      <div className=" container h-44 flex flex-col items-center justify-evenly mb-10">
        <h3 className="text-white">Resources</h3>
        <p className="text-gray-400">About</p>
        <p className="text-gray-400">Our Team</p>
        <p className="text-gray-400">Careers</p>
        <p className="text-gray-400">Contact</p>
      </div>
      <div className="flex justify-evenly container px-20">
        <Image width={30} height={30} src={facebook} alt="facebook" />
        <Image width={30} height={30} src={twitter} alt="facebook" />
        <Image width={30} height={30} src={pinterest} alt="facebook" />
        <Image width={30} height={30} src={instagram} alt="facebook" />
      </div>
    </div>
  );
};

export default Footer;
