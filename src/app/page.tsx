"use client";
import { useState } from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";
import InfoBox from "./components/InfoBox";
import Input from "./components/Input";
import Nav from "./components/Nav";

async function shortenUrl(url: string) {
  try {
    const data = await fetch("https://api.rebrandly.com/v1/links", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: `${process.env.REBRANDLY_API_KEY}`,
      },
      body: JSON.stringify({
        destination: url,
      }),
    });
    const newUrl = await data.json();
    console.log("NEW URL", newUrl);
    return newUrl;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home() {
  //create onChange handler
  const [searchTerm, setSearcTerm] = useState("");

  const shortUrl = shortenUrl(
    "https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g"
  );
  console.log(shortUrl);
  return (
    <main className=" min-h-fit overflow-auto">
      <Nav />
      <Body />
      <Input handler={setSearcTerm} />
      <InfoBox />
      <Footer />
    </main>
  );
}
