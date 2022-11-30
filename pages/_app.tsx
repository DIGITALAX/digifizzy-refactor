import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import DIGIFIZZY from "../components/Home/DIGIFIZZY";
import Header from "../components/Layout/Header";
import { createContext, useState } from "react";
import Stream from "../components/Home/Stream";

export const GlobalProfileContextDefault = {
  openFrame: false,
  setOpenFrame: (expressInterest: boolean) => {},
};

export const GlobalContext = createContext(GlobalProfileContextDefault);

function MyApp({ Component, pageProps }: AppProps) {
  const [openFrame, setOpenFrame] = useState(
    GlobalProfileContextDefault.openFrame
  );
  return (
    <GlobalContext.Provider value={{ openFrame, setOpenFrame }}>
      <div className="min-h-screen h-auto min-w-screen w-screen relative selection:bg-skyBlue selection:text-dull cursor-sewingS">
        <div className="absolute w-full h-screen">
          <Image layout="fill" src={"/images/mask.png"} className="relative" />
        </div>
        {openFrame && <Stream />}
        <DIGIFIZZY />
        <Header />
        <Component {...pageProps} />
      </div>
    </GlobalContext.Provider>
  );
}

export default MyApp;
