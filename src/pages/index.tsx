import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "../components/VideoCard"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard title={"surya the superstar"}
        author={"ashish bhaskar"}
        views={"45M"}
        img={"thumbnail.png"}
        thumbimg={"thumbnail.png"}
        timestamp={"5 days ago"}
      ></VideoCard>
    </div>
  );
}
