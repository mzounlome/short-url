"use client";

import Body from "./components/Body";
import Footer from "./components/Footer";
import InfoBox from "./components/InfoBox";
import Input from "./components/Input";
import Nav from "./components/Nav";
import { shortenUrl } from "@/utils/api";
import { urlPayloads } from "./data";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearcTerm] = useState("");
  const [urls, setUrls] = useState(urlPayloads);

  // create submit function to log searchTerm to console
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { url } = await shortenUrl(searchTerm);
    setUrls([
      ...urls,
      {
        id: urls.length + 1,
        origUrl: searchTerm,
        newUrl: url,
      },
    ]);

    // console.log("url from api call", url);
    // console.log("submitted", searchTerm);
    setSearcTerm("");
  };
  return (
    <main className=" min-h-fit overflow-auto">
      <Nav />
      <Body />
      <Input
        handler={setSearcTerm}
        searchTerm={searchTerm}
        onSubmit={onSubmit}
      />
      <InfoBox urlPayloads={urls} searchTerm={searchTerm} />
      <Footer />
    </main>
  );
}
