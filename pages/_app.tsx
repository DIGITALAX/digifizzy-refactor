import "../styles/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import DIGIFIZZY from "../components/Home/DIGIFIZZY";
import Header from "../components/Layout/Header";
import { createContext, useEffect, useState } from "react";
import Stream from "../components/Home/Stream";
import shuffle from "shuffle-array";

export const GlobalProfileContextDefault = {
  openFrame: false,
  setOpenFrame: (expressInterest: boolean) => {},
  newLink:
    "https://www.youtube.com/embed/Izh9pP18sVs?controls=0?rel=0&autoplay=1&mute=1",
};

export const GlobalContext = createContext(GlobalProfileContextDefault);

function MyApp({ Component, pageProps }: AppProps) {
  const [openFrame, setOpenFrame] = useState(
    GlobalProfileContextDefault.openFrame
  );
  const [newLink, setNewLink] = useState(GlobalProfileContextDefault.newLink);
  const streamLinks: string[] = [
    "https://www.youtube.com/embed/Izh9pP18sVs?controls=0?rel=0&autoplay=1&mute=1",
    // "https://www.youtube.com/embed/GNrerhak_pY?controls=0?rel=0&autoplay=1&mute=1",
  ];
  useEffect(() => {
    const shuffledLinks: number[] = shuffle([0, 1]);
    setNewLink(streamLinks[shuffledLinks[0]]);
  }, []);
  return (
    <GlobalContext.Provider value={{ openFrame, setOpenFrame, newLink }}>
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
