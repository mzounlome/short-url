"use client";
import { FC } from "react";

interface UrlCardProps {
  url: any;
}

const UrlCard: FC<UrlCardProps> = ({ url }) => {
  // console.log(jobs);
  return (
    <div className="bg-white rounded h-24 w-full mb-3 desktop:flex desktop:justify-between desktop:h-16 desktop:px-4">
      <div className="w-full h-2/4 desktop:flex desktop:items-center desktop:h-full desktop:w-5/12">
        <button className="h-14 rounded flex justify-center items-center desktop:justify-start  desktop:items-end w-full desktop:h-10 desktop:pb-1">
          <p className="text-black text-sm">{url.origUrl}</p>
        </button>
      </div>
      <div className="w-full  h-2/4 flex items-center desktop:w-4/12 desktop:justify-around desktop:h-full">
        <button className="h-14  w-8/12 rounded flex justify-center items-center desktop:justify-start  desktop:items-end  desktop:h-10 desktop:pb-1">
          <p className="text-teal-600  text-sm">{url.newUrl}</p>
        </button>
        <button className="text-white bg-teal-600 hover:bg-teal-500 text-center text-sm w-4/12 h-full desktop:h-10 desktop:w-28 desktop:rounded-md">
          Copy
        </button>
      </div>
    </div>
  );
};

export default UrlCard;
