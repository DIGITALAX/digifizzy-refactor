import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Refactor from "../components/refactor/Refactor";

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
      <div className="min-w-screen min-h-screen h-screen flex flex-col bg-offBlack">
        <Refactor />
      </div>
    </div>
  );
};

export default Home;
