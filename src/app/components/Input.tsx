"use client";

import { FC } from "react";
import shorten from "./images/bg-shorten-mobile.svg";
import Image from "next/image";
interface InputProps {}
//
const Input: FC<InputProps> = ({}) => {
  return (
    <div className="h-fit flex flex-col items-center">
      <div className="bg-indigo-950 rounded flex  relative w-10/12 ">
        <Image
          objectFit="cover"
          objectPosition="center"
          layout="fill"
          src={shorten}
          alt="shorten"
        />
        <div className="w-full h-44 p-8  flex flex-col items-center z-10 desktop:flex-row  desktop:p-4  ">
          <input
            className="h-14 rounded w-80 px-4 mb-5 desktop:mb-0 desktop:w-10/12 desktop:mr-10"
            placeholder="Shorten a link here..."
            type="text"
          />
          <button className="h-14 rounded w-80 px-4 bg-teal-400 text-white">
            Shorten it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
