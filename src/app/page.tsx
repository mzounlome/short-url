"use client";
import { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import InfoBox from "./components/InfoBox";
import Input from "./components/Input";
import Nav from "./components/Nav";
import { urlPayloads } from "./data";

export default function Home() {
  const apiKey = process.env.REBRANDLY_API_KEY;
  async function shortenUrl(url: string) {
    console.log("api key", apiKey);
    try {
      const data = await fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: `${apiKey}`,
        },
        body: JSON.stringify({
          destination: url,
        }),
      });
      console.log(data);
      const newUrl = await data.json();
      console.log("NEW URL", newUrl);
      return newUrl;
    } catch (error) {
      console.log(error);
    }
  }
  console.log("rebrand api", apiKey);
  //create onChange handler
  const [searchTerm, setSearcTerm] = useState("");
  const [urls, setUrls] = useState(urlPayloads);
  // console.log(shortUrl);
  console.log(searchTerm);
  // create submit function to log searchTerm to console
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const url = await shortenUrl(searchTerm);
    // setUrls([
    //   ...urls,
    //   {
    //     id: urls.length + 1,
    //     origUrl: searchTerm,
    //     newUrl: url.shortUrl,
    //   },
    // ]);
    console.log(url);
    console.log("submitted", searchTerm);
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
