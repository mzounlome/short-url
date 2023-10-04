"use client";

import { FC } from "react";
import Image from "next/image";
import brandRec from "./images/icon-brand-recognition.svg";
interface InfoBoxProps {}
//
const InfoBox: FC<InfoBoxProps> = ({}) => {
  return (
    <div className="h-fit bg-gray-200 p-4 flex flex-col items-center">
      <div className="container h-48 p-8 bg-red-200 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Advanced Statistics</h1>
        <p className="text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
          aliquid libero, at pariatur eum laboriosam harum in minus perferendis.
        </p>
      </div>
      <div className="h-hit container flex flex-col items-center">
        <div className=" bg-white h-72 w-11/12 rounded px-5 flex flex-col justify-evenly relative">
          <div className="bg-indigo-900 rounded-full h-20 w-20 flex items-center justify-center absolute -top-9 mb-20 ">
            <Image width={40} height={40} src={brandRec} alt="brandRec" />
          </div>
          <h1 className="text-2xl font-bold text-center ">Brand Recognition</h1>
          <p className="text-center text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
            aliquid libero, at pariatur eum laboriosam harum in minus
            perferendis.
          </p>
        </div>
        <div className=" bg-white h-72 w-11/12 rounded px-5 flex flex-col justify-evenly relative">
          <div className="bg-indigo-900 rounded-full h-20 w-20 flex items-center justify-center absolute -top-9 mb-20 ">
            <Image width={40} height={40} src={brandRec} alt="brandRec" />
          </div>
          <h1 className="text-2xl font-bold text-center ">Brand Recognition</h1>
          <p className="text-center text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
            aliquid libero, at pariatur eum laboriosam harum in minus
            perferendis.
          </p>
        </div>
        <div className=" bg-white h-72 w-11/12 rounded px-5 flex flex-col justify-evenly relative">
          <div className="bg-indigo-900 rounded-full h-20 w-20 flex items-center justify-center mb-16 absolute -top-9  ">
            <Image width={40} height={40} src={brandRec} alt="brandRec" />
          </div>
          <h1 className="text-2xl font-bold text-center ">Brand Recognition</h1>
          <p className="text-center text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
            aliquid libero, at pariatur eum laboriosam harum in minus
            perferendis.
          </p>
        </div>
      </div>
      <div className="container h-80 bg-indigo-900 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl font-bold mb-6">
          Boost your links today!
        </h1>
        <button className="bg-teal-400 rounded-full self-center w-44 h-12  px-4">
          <p className="text-white">Get Started</p>
        </button>
      </div>
    </div>
  );
};

export default InfoBox;
