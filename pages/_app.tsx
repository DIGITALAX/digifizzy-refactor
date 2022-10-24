import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRef } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

function MyApp({ Component, pageProps }: AppProps) {
  const rewind = useRef<null | HTMLDivElement>(null);
  const handleRewind = (): void => {
    rewind.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen h-auto min-w-screen w-screen bg-offBlack relative selection:bg-skyBlue selection:text-dull cursor-sewingS">
      <Header rewind={rewind} />
      <Component {...pageProps} />
      <Footer handleRewind={handleRewind} />
    </div>
  );
}

export default MyApp;
