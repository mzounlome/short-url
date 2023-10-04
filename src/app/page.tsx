import Menu from "./components/Menu";
import Body from "./components/Body";
import Input from "./components/Input";
import InfoBox from "./components/InfoBox";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className=" min-h-fit overflow-auto">
      <Menu />
      <Body />
      <Input />
      <InfoBox />
      <Footer />
    </main>
  );
}
