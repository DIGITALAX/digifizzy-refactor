import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRef } from "react";
import Footer from "../components/Layout/Footer";
import Image from "next/image";
import DIGIFIZZY from "../components/Home/DIGIFIZZY";
import Header from "../components/Layout/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const rewind = useRef<null | HTMLDivElement>(null);
  const handleRewind = (): void => {
    rewind.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen h-auto min-w-screen w-screen relative selection:bg-skyBlue selection:text-dull cursor-sewingS">
      <div className="absolute w-full h-screen">
        <Image layout="fill" src={"/images/mask.png"} className="relative" />
      </div>
      <DIGIFIZZY />
      <Header />
      <Component {...pageProps} />
      <Footer handleRewind={handleRewind} />
    </div>
  );
}

export default MyApp;
