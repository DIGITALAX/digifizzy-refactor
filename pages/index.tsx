import type { NextPage } from "next";
import Head from "next/head";
import Issues from "../components/Home/Issues";
import Screen from "../components/Home/Screen";

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
        <div className="relative w-fit h-fit grid grid-flow-col auto-cols-auto pt-6 col-start-1 place-self-center gap-14">
          <Screen />
          <Issues />
        </div>
      </div>
    </div>
  );
};

export default Home;
