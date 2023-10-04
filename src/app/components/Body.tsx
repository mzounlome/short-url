"use client";
import Image from "next/image";
import { FC } from "react";
import person from "./images/illustration-working.png";
interface MenuProps {}
//
const Menu: FC<MenuProps> = ({}) => {
  return (
    <div className="container mt-5 h-4/5 flex flex-col  desktop:flex-row-reverse desktop:h-3/5 p-5">
      <div className="container h-96 relative p-8 bg-red-200">
        <Image layout="fill" objectFit="cover" src={person} alt="person" />
      </div>
      <div className="h-96  flex flex-col justify-evenly px-10">
        <h1 className="font-bold text-4xl text-center">
          More than just shorter links
        </h1>
        <p className="text-gray-400 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem tenetur nisi laboriosam, aperiam fugiat consequuntur
          fugit
        </p>
        <button className="bg-teal-400 rounded-full self-center w-44 h-12  px-4">
          <p className="text-white">Get Started</p>
        </button>
      </div>
    </div>
  );
};

export default Menu;
