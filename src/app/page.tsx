import Body from "./components/Body";
import Input from "./components/Input";
import InfoBox from "./components/InfoBox";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

async function short() {
  const url = {
    url: "https://www.linkein.com/company/frontend-mentor",
  };
  const data = await fetch(`https://shrtlnk.dev/api/v2/link`, {
    method: "POST",
    headers: {
      "api-key": `${process.env.SHORT_API}`,
      Accept: "application/json",
      "Content-Type": "application/json",
      "Content-Length": `${url.url.length}`,
    },
    cache: "force-cache",
    body: JSON.stringify(url),
  });
  const response = await data.json();
  console.log(response);
}

export default async function Home() {
  short();
  return (
    <main className=" min-h-fit overflow-auto">
      <Nav />
      <Body />
      <Input />
      <InfoBox />
      <Footer />
    </main>
  );
}
