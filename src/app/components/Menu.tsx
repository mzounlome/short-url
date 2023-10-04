"use client";

import { FC } from "react";

interface MenuProps {}
//
const Menu: FC<MenuProps> = ({}) => {
  return (
    <div className="container h-24 p-8 bg-red-200">
      <h1 className="text-3xl font-bold">Shortly</h1>
    </div>
  );
};

export default Menu;
