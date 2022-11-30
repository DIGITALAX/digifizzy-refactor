import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Collection from "../components/Home/Collection";
import Issues from "../components/Home/Issues";
import Screen from "../components/Home/Screen";
import Footer from "../components/Layout/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DIGIFIZZY</title>
        <meta name="description" content="Web3 Metaverse Zine" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="DIGIFIZZY" />
        <meta property="og:image" content="https://digifizzy.xyz/card.png/" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="w-full h-full flex flex-col grid grid-flow-col auto-cols-auto">
        <div className="relative w-full md:w-[80vw] xl:w-[67vw] h-fit grid grid-flow-row auto-rows-auto pt-6 col-start-1 place-self-center gap-14 row-start-1">
          <Screen />
          <Issues />
        </div>
        <div className="relative w-full h-full grid grid-flow-row auto-rows-auto row-start-2 pt-14 gap-14">
          <div className="absolute w-full h-fit text-white font-futura text-[16vw] sm:text-[11vw] leading-tight z-30 pt-32 md:pt-20">
            IN THE COLLECTION
          </div>
          <Collection />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
