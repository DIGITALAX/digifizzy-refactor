import type { NextPage } from "next";
import Head from "next/head";
import Front from "../components/Home/Front/Front";
import Text from "../components/Home/Text/Text";

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
      <div className="min-w-screen min-h-screen h-fit flex flex-col">
        <Front />
        <Text />
      </div>
    </div>
  );
};

export default Home;
