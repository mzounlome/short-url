"use client";
import UrlCardList from "./UrlCardList";
import { FC } from "react";
import Image from "next/image";
import brandRec from "./images/icon-brand-recognition.svg";
import boost from "./images/bg-boost-mobile.svg";
interface InfoBoxProps {
  searchTerm: any;
  urlPayloads: any;
}
//
const InfoBox: FC<InfoBoxProps> = ({ searchTerm, urlPayloads }) => {
  return (
    <div className="h-fit w-full bg-gray-200 pt-20 flex flex-col items-center">
      <UrlCardList searchTerm={searchTerm} urls={urlPayloads} />
      <div className="w-full h-48 p-8 flex flex-col items-center mb-20 desktop:w-4/12">
        <h1 className="text-3xl font-bold mb-8">Advanced Statistics</h1>
        <p className="text-gray-400 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
          aliquid libero, at pariatur eum laboriosam harum in minus perferendis.
        </p>
      </div>
      <div className="h-hit w-full flex flex-col items-center desktop:flex-row desktop:justify-evenly">
        <div className=" bg-white h-72 w-11/12 rounded px-5 flex flex-col justify-evenly relative mb-20 desktop:w-3/12 desktop:h-60 ">
          <div className="bg-indigo-900 rounded-full h-20 w-20 flex items-center justify-center absolute -top-14   ">
            <Image width={40} height={40} src={brandRec} alt="brandRec" />
          </div>
          <h1 className="text-2xl font-bold text-center ">Brand Recognition</h1>
          <p className="text-center text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
            aliquid libero, at pariatur eum laboriosam harum in minus
            perferendis.
          </p>
        </div>
        <div className=" bg-white h-72 w-11/12 rounded px-5 flex flex-col justify-evenly relative mb-20 desktop:w-3/12 desktop:h-60 desktop:mb-10">
          <div className="bg-indigo-900 rounded-full h-20 w-20 flex items-center justify-center absolute -top-14  ">
            <Image width={40} height={40} src={brandRec} alt="brandRec" />
          </div>
          <h1 className="text-2xl font-bold text-center ">Detailed Research</h1>
          <p className="text-center text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
            aliquid libero, at pariatur eum laboriosam harum in minus
            perferendis.
          </p>
        </div>
        <div className=" bg-white h-72 w-11/12 rounded px-5 flex flex-col justify-evenly relative desktop:w-3/12 desktop:h-60">
          <div className="bg-indigo-900 rounded-full h-20 w-20 flex items-center justify-center absolute -top-14   ">
            <Image width={40} height={40} src={brandRec} alt="brandRec" />
          </div>
          <h1 className="text-2xl font-bold text-center ">
            Fully Customizable
          </h1>
          <p className="text-center text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error nulla
            aliquid libero, at pariatur eum laboriosam harum in minus
            perferendis.
          </p>
        </div>
      </div>
      <div className="w-full h-80 bg-indigo-950 flex flex-col relative justify-center items-center desktop:h-60 desktop:items-start desktop:px-8">
        <Image
          objectFit="cover"
          layout="fill"
          objectPosition="center"
          src={boost}
          alt="boost"
        />
        <div className=" h-fit w-full flex flex-col items-center desktop:w-4/12 ">
          <h1 className="text-white text-3xl font-bold z-10 mb-6">
            Boost your links today!
          </h1>
          <button className="bg-teal-400 text-white hover:bg-teal-600 rounded-full self-center w-44 h-12  px-4  ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
