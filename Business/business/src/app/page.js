import Banner from "@/components/Layout/Home/Banner/Banner";
import Posts from "@/components/Layout/Home/Post/Post";
import Shareholder from "@/components/Layout/Home/Shareholder/Shareholder";
import Image from "next/image";

export default function Home() {
  return (
      <div className="bg-white">
      <Banner></Banner>
      <Shareholder></Shareholder>
      </div>
  );
}
