import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { BsTwitter } from "react-icons/bs";

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative h-full row-start-4 w-full pb-28">
      <div className="absolute w-full h-screen bottom-0">
        <Image
          layout="fill"
          src={"/images/mask.png"}
          className="relative rotate-180"
        />
      </div>
      <div className="relative grid auto-rows-auto grid-flow-row w-full h-full">
        <div
          id="foot3"
          className="relative w-full md:w-[80vw] xl:w-[67vw] place-self-center h-fit p-0.5 col-start-1 grid auto-cols-auto grid-flow-col"
        >
          <div className="relative bg-offBlack w-full h-full col-start-1 grid auto-rows-auto grid-flow-row pb-4">
            <div className="relative w-full h-fit row-start-1 grid grid-flow-col auto-cols-auto p-2 sm:p-8">
              <div className="relative w-full lg:w-[40vw] h-fit row-start-1 col-start-1 bg-viol border border-sapph text-dosis grid grid-flow-row auto-rows-auto gap-3 p-2 lg:p-4">
                <div className="relative w-fit h-fit row-start-1 text-left text-white text-[10vw] sm:text-[8vw] md:text-[6vw] font-folk leading-tight">
                  DIGIFIZZY
                </div>
                <div className="relative w-full h-fit text-justify text-white font-dosis row-start-2 leading-6 pb-6">
                  AT THE EDGE OF THE 24/7 LATENCY SOCIETY, A DIZZYING ARRAY OF
                  DISTORTIONS STAND BETWEEN US. THERE IS ONE WAY UP AND OUT.
                  WITH THE RELEASE OF VOLUME TWO, THIS SERIES OF INTERMEDIA
                  PUBLICATIONS PROMPTS AI & ARTISTS ALIKE TO ASK WHY THESE NEW
                  WAVES OF RECESSION NOSTALGIA FEEL UNCANNY & YET SO FAMILIAR…
                </div>
                <div className="relative row-start-3 bg-white border border-orang grid grid-flow-col auto-cols-auto p-2 w-full h-fit gap-5">
                  <div className="relative w-fit h-fit font-dosis text-lg text-black text-justify row-start-1 col-start-1 text-xs justify-self-center self-start">
                    EXCITED BY WHO YOU CAN REACH WITH THE EVERGROWING POWER OF
                    THIS USER OWNED SOCIAL WEB?
                  </div>
                  <div className="relative w-full h-px sm:w-px sm:h-full bg-black row-start-2 col-start-1 sm:row-start-1 sm:col-start-2"></div>
                  <div className="relative w-fit h-fit font-dosis text-lg text-black text-justify col-start-1 row-start-3 sm:row-start-1 sm:col-start-3 text-xs justify-self-center self-start">
                    DO YOU WORRY ABOUT HOW FAST AI ART IS CHANGING CREATIVITY? -
                    PRESS START FOR YES -
                  </div>
                  <div className="relative w-full sm:w-px h-px sm:h-full bg-black sm:row-start-1 row-start-4 col-start-1 sm:col-start-4"></div>
                  <div className="relative w-fit h-fit font-dosis text-lg text-black text-justify sm:row-start-1 row-start-5 col-start-1 sm:col-start-5 text-xs justify-self-center self-start">
                    TUNE IN FOR NEW SYNTH LOOKS, HOT TAKES & LO-FI SOUNDS,
                    ALWAYS ON. –{">"}
                  </div>
                  <div className="relative w-fit h-fit row-start-6 col-start-1 sm:row-start-1 sm:col-start-6 pl-10 grid grid-flow-col auto-cols-auto place-self-end gap-1">
                    <div className="relative col-start-1 row-start-2 w-fit h-fit place-self-end grid grid-flow-col auto-cols-auto hover:rotate-12 hover:scale-50">
                      <Image
                        src="/images/pointblack.png"
                        width={20}
                        height={20}
                        className="relative self-end col-start-1"
                      />
                    </div>
                    <div className="relative col-start-2 row-start-2 w-fit h-fit place-self-end grid grid-flow-col auto-cols-auto hover:rotate-12 hover:scale-50">
                      <Image
                        src="/images/pointblack.png"
                        width={20}
                        height={20}
                        className="relative self-end col-start-1"
                      />
                    </div>
                    <div className="relative col-start-2 row-start-1 w-fit h-fit place-self-end grid grid-flow-col auto-cols-auto hover:rotate-12 hover:scale-50">
                      <Image
                        src="/images/pointblack.png"
                        width={20}
                        height={20}
                        className="relative self-end col-start-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-full h-full row-start-2 col-start-1 lg:row-start-1 lg:col-start-2 grid grid-flow-row auto-rows-auto py-10 lg:py-0">
                <div className="relative w-fit h-fit row-start-1 self-start justify-self-end grid grid-flow-col auto-cols-auto gap-3">
                  <div className="relative w-fit h-fit col-start-1">
                    <Link href={"https://blog.digitalax.xyz/"}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-sewingHS h-fit relative pr-1"
                      >
                        <Image
                          src={"/images/mirror.png"}
                          width={15}
                          height={20}
                          priority
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="relative w-fit h-fit col-start-2">
                    <Link href={"https://github.com/digitalax"}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-sewingHS h-fit relative pr-1"
                      >
                        <Image
                          src={"/images/github.png"}
                          width={20}
                          height={19}
                          priority
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="relative w-fit h-fit col-start-3 pr-1">
                    <Link href={"https://lenster.xyz/u/digitalax.lens"}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-sewingHS h-fit relative"
                      >
                        <Image
                          src={"/images/lens.png"}
                          width={20}
                          height={20}
                          priority
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="relative w-fit h-fit col-start-4">
                    <Link href={"https://twitter.com/digitalax_"}>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-sewingHS h-fit relative"
                      >
                        <BsTwitter size={20} color={"#FFDCFF"} />
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="relative w-fit h-fit row-start-2 self-end justify-self-end text-right font-dosis text-white font-rain lg:pt-0 pt-8">
                  A DIGITALAX PUBLICATION
                </div>
              </div>
            </div>
            <div className="relative w-full h-16 row-start-2">
              <Image src={"/images/blurhash.png"} layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
