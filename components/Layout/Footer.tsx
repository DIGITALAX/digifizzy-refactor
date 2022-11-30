import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { BsTwitter } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";

const Footer: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative h-full row-start-4 w-full pb-28">
      <div className="absolute w-full h-screen">
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
            <div className="relative w-full h-fit row-start-1 grid grid-flow-col auto-cols-auto p-8">
              <div className="relative w-full h-80 col-start-1 bg-white text-dosis">
                DIGIFIZZY ZINE
              </div>
              <div className="relative w-full h-full col-start-2 grid grid-flow-row auto-rows-auto">
                <div className="relative w-fit h-fit row-start-1 self-start justify-self-end"></div>
                <div className="relative w-fit h-fit row-start-2 self-end justify-self-end text-right font-dosis text-white">
                  bit more text about it as needed
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
