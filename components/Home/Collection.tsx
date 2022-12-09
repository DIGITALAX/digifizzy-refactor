import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import { useMediaQuery } from "@material-ui/core";

const Collection: FunctionComponent = (): JSX.Element => {
  const iframes: string[] = ["yt1", "yt2"];
  const links: string[] = [
    "https://www.youtube.com/embed/qaoyC8D5Kt0",
    "https://www.youtube.com/embed/2Sa8o39R0jY",
  ];
  let queryWindowSizeMobile: boolean = useMediaQuery("(max-width:660px)");
  let queryWindowSizeGalaxy: boolean = useMediaQuery("(max-width:300px)");
  return (
    <div className="relative w-full md:w-[80vw] xl:w-[67vw] h-full grid grid-flow-col auto-cols-auto row-start-3 justify-self-center z-10">
      <div className="col-start-1 relative w-full h-fit grid grid-flow-row auto-rows-auto bg-black border-2 border-sapph gap-10 sm:gap-20 lg:gap-40 pt-28">
        <div className="relative w-full h-fit row-start-1 grid grid-flow-col auto-cols-auto galaxy:px-4 py-4 sm:p-16">
          <div className="relative w-fit h-fit col-start-1 row-start-1">
            <Image
              src={"/images/ship.png"}
              width={!queryWindowSizeGalaxy ? 550 : screen?.width}
              objectFit={!queryWindowSizeMobile ? "cover" : "contain"}
              objectPosition={"center"}
              height={
                !queryWindowSizeMobile
                  ? 300
                  : !queryWindowSizeGalaxy
                  ? 600
                  : 400
              }
              className="relative w-fit h-fit"
            />
          </div>
          <div className="relative z-10 w-fit galaxy:w-80 h-fit bg-black p-4 text-white grid grid-flow-col auto-cols-auto sm:col-start-2 sm:row-start-1 row-start-1 col-start-1">
            <div className="relative w-fit h-fit text-white font-futur text-right col-start-1">
              the persistence of infinite memories
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit row-start-2 grid grid-flow-col auto-cols-auto galaxy:p-4 sm:p-16 sm:gap-0 gap-12">
          <div className="relative w-fit h-fit row-start-1 col-start-1 text-white text-left font-dosis place-self-center text-base sm:text-xs break-keep">
            SYNTHWAVE SUNRISE
            <br />
            the skyline in NYC was always a better format
            <br />
            for solar distortions it jumps a bit electric
            <br />
            like who is the wandering nomad
            <br />
            in search of a better place AI & or ART
            <br />
            a collection
            <br />
            for DIGIFIZZY Vol. 2<br />
          </div>
          <div className="relative w-fit h-fit row-start-2 col-start-1 sm:row-start-1 sm:col-start-2 place-self-center hover:rotate-12">
            <Image src="/images/wave.png" width={280} height={400} />
          </div>
        </div>
        <div className="relative w-full h-fit row-start-3 grid grid-flow-col auto-cols-auto galaxy:p-4 sm:p-16 sm:gap-0 gap-12">
          <div className="relative w-fit h-fit col-start-1 row-start-1 sm:col-start-2 text-white text-left font-dosis place-self-center text-base sm:text-xs">
            NEVER EAST SIDE a study of the color and character of
            <br />
            a neighborhod through windows into otherland lives
            <br />
            in pursuit of the neverending new bright nights
            <br />
            glowing from the bodega corners in deep convolutions
            <br />
            portrait of a city AI & or ART
            <br />
            a collection
            <br />
            for DIGIFIZZY Vol. 2 <br />
          </div>
          <div className="relative w-fit h-fit col-start-1 row-start-2 sm:row-start-1 place-self-center hover:rotate-12">
            <Image src="/images/night.png" width={280} height={400} />
          </div>
        </div>
        <div className="relative w-full h-fit row-start-4 grid grid-flow-col auto-cols-auto galaxy:p-4 sm:p-16 sm:gap-0 gap-12">
          <div className="relative w-fit h-fit row-start-1 col-start-1 text-white text-left font-dosis place-self-center text-base sm:text-xs">
            THE LIMINAL ELSEWHERE is a graphic novel take <br />
            on the origami nature of the infinite city <br />
            in dichroic glass samples <br />
            she walks the vector planes <br />
            AI & or ART <br />
            a collection <br />
            for DIGIFIZZY Vol. 2
          </div>
          <div className="relative w-fit h-fit col-start-1 row-start-2 sm:row-start-1 sm:col-start-2 place-self-center hover:rotate-12">
            <Image src="/images/swish.png" width={280} height={400} />
          </div>
        </div>
        <div className="relative w-full h-fit row-start-5 grid grid-flow-col auto-cols-auto galaxy:p-4 sm:p-16 sm:gap-0 gap-12">
          <div className="relative w-fit h-fit col-start-1 row-start-1 sm:col-start-2 text-white text-left font-dosis place-self-center text-base sm:text-xs">
            BRILLIANT DAY FOR A TENNIS REMATCH urban escapades
            <br />
            in a reflection of pure fantasy nostalgia
            <br />
            from the latent minds of better trades
            <br />
            in the times before and after
            <br />
            i’d rather be playing virtual tennis
            <br />
            in the bahamas
            <br />
            than listen to another word on that paper <br />
            of record breaking
            <br />
            stage <br />
            AI & or ART
            <br />
            a collection
            <br />
            for DIGIFIZZY Vol. 2<br />
          </div>
          <div className="relative w-fit h-fit row-start-2 sm:row-start-1 col-start-1 place-self-center hover:rotate-12">
            <Image src="/images/court.png" width={280} height={400} />
          </div>
        </div>
        <div className="relative w-full h-fit row-start-6 grid grid-flow-col auto-cols-auto galaxy:p-4 sm:p-16">
          <div className="relative w-60 galaxy:w-fit h-fit col-start-1 justify-self-center text-center text-white font-futur text-sm galaxy:text-xl sm:text-3xl leading-10">
            Tune in 24/7. Collect <br /> on lens today.
          </div>
        </div>
        <div className="relative w-full h-full row-start-7 grid grid-flow-col auto-cols-auto pb-8 px-8">
          <div className="relative w-fit h-full col-start-1 grid grid-flow-col auto-cols-auto gap-8">
            <div className="relative w-fit h-fit col-start-1 grid grid-flow-col auto-cols-auto gap-2 self-end">
              <div className="relative w-fit h-fit col-start-1 row-start-1 grid grid-flow-col auto-cols-auto">
                <Image
                  src={"/images/point.png"}
                  width={20}
                  height={20}
                  className="col-start-1 place-self-center w-fit h-fit relative"
                />
              </div>
              <div className="relative w-fit h-fit col-start-1 row-start-2 grid grid-flow-col auto-cols-auto">
                <Image
                  src={"/images/point.png"}
                  width={20}
                  height={20}
                  className="col-start-1 place-self-center w-fit h-fit relative"
                />
              </div>
              <div className="relative w-fit h-fit col-start-2 row-start-2 grid grid-flow-col auto-cols-auto">
                <Image
                  src={"/images/point.png"}
                  width={20}
                  height={20}
                  className="col-start-1 place-self-center w-fit h-fit relative"
                />
              </div>
            </div>
            <div className="relative w-full h-fit col-start-2 grid grid-flow-col auto-cols-auto gap-2 self-end">
              {iframes.map((frame: string, index: number) => {
                return (
                  <Link
                    key={index}
                    href={links[index]}
                    className={`w-fit h-fit place-self-center cursor-sewingHS col-start-${
                      index + 1
                    }`}
                  >
                    <a
                      target={"_blank"}
                      rel="noreferrer"
                      className="p-0.5 bg-sapph w-fit h-fit grid grid-flow-col auto-cols-auto cursor-sewingHS"
                    >
                      <Image
                        width={!queryWindowSizeMobile ? 30 : 50}
                        height={!queryWindowSizeMobile ? 50 : 70}
                        src={`/images/${frame}.png`}
                        className="relative flex col-start-1 place-self-center w-fit h-fit"
                      />
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="relative w-fit h-fit col-start-1 row-start-2 sm:pt-0 pt-10 sm:row-start-1 sm:col-start-2 justify-self-end text-white font-dosis text-right text-xl">
            featured drops streaming live <br />
            in a lo-fi timeline near you
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
