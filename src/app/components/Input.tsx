"use client";

import { FC } from "react";

interface InputProps {}
//
const Input: FC<InputProps> = ({}) => {
  return (
    <div className="flex justify-center">
      <div className="w-11/12 h-44 p-8 bg-red-200 rounded flex flex-col items-center">
        <input
          className="h-14 rounded w-80 px-4 mb-3"
          placeholder="Shorten a link here..."
          type="text"
        />
        <button className="h-14 rounded w-80 px-4 bg-teal-400 text-white">
          Shorten it!
        </button>
      </div>
    </div>
  );
};

export default Input;
