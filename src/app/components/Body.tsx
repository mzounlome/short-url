"use client";
import Image from "next/image";
import { FC } from "react";
import person from "./images/illustration-working.png";
interface MenuProps {}
//
const Menu: FC<MenuProps> = ({}) => {
  return (
    <div className="w-full mt-5 h-fit flex flex-col items-center tablet:flex-row-reverse  desktop:flex-row-reverse desktop:justify-center">
      <div className="w-full h-96 bg-purple-950  relative p-8 desktop:mb-32 desktop:max-w-screen-md desktop:max-h-96">
        <Image
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          src={person}
          alt="person"
        />
      </div>
      <div className="h-96 w-full flex flex-col justify-evenly items-center px-10 desktop:items-start desktop:max-w-screen-sm desktop:max-h-96">
        <h1 className="font-bold text-4xl  desktop:text-6xl">
          More than just shorter links
        </h1>
        <p className="text-gray-400  desktop:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Exercitationem tenetur nisi laboriosam, aperiam fugiat consequuntur
          fugit
        </p>
        <button className="bg-teal-400 rounded-full  w-44 h-12  px-4 desktop:self-start">
          <p className="text-white">Get Started</p>
        </button>
      </div>
    </div>
  );
};

export default Menu;
