"use client";

import { FC } from "react";
import UrlCard from "./UrlCard";
interface UrlCardListProps {
  urls: any;
  searchTerm: any;
}

const UrlCardList: FC<UrlCardListProps> = ({ urls, searchTerm }) => {
  // console.log(jobs)
  return (
    <div className="w-10/12 h-fit ">
      {urls.map((url: any) => (
        <UrlCard key={url.id} url={url} />
      ))}
    </div>
  );
};

export default UrlCardList;
