import Image from "next/image";
import { FunctionComponent } from "react";
import { AiOutlineForward, AiOutlineBackward } from "react-icons/ai";
import Volume from "./Volume";

const Issues: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-full grid grid-flow-col auto-cols-auto row-start-2 justify-self-center">
      <div className="col-start-1 relative w-full h-fit grid grid-flow-col auto-cols-auto bg-black border-2 border-white">
        <div className="relative h-fit w-fit col-start-1 font-futur text-white text-center justify-self-center row-start-1 pt-10 text-4xl leading-10 z-10">
          Message stuff goes here. <br /> Something abvout creatrs
          <br />
          on the edge, the <br /> persistence of public <br /> memory, and 24/7
          latent
          <br /> waves…
        </div>
        <Volume />
        <div className="relative w-full h-full col-start-1 row-start-2 grid grid-flow-col auto-cols-auto pt-3 pt-16">
          <div className="col-start-1 relative w-fit h-fit col-start-1 row-start-2 grid grid-flow-col auto-cols-auto gap-28 pb-6 pt-28 place-self-center">
            <div className="relative w-fit h-fit col-start-1 grid grid-flow-row auto-rows-auto gap-10 place-self-center">
              <div className="relative w-fit h-fit row-start-1 text-white font-atmos text-7xl text-center place-self-center">
                past <br /> issues*
              </div>
              <div className="relative w-fit h-fit row-start-2 grid grid-flow-col auto-cols-auto place-self-center">
                <div className="col-start-1 border-2 border-white w-fit h-fit px-8 py-4 relative grid grid-flow-col auto-cols-auto gap-3 rounded">
                  <div className="relative w-fit h-fit col-start-1 place-self-center">
                    <AiOutlineBackward size={25} color={"white"} />
                  </div>
                  <div className="relative w-fit h-fit col-start-2 text-white font-dosis place-self-center text-2xl">
                    1
                  </div>
                  <div className="relative w-fit h-fit col-start-3 place-self-center">
                    <AiOutlineForward size={25} color={"white"} />
                  </div>
                </div>
              </div>
              <div className="relative w-fit h-fit row-start-3 text-white font-dosis text-center place-self-center">
                arweave in the process...
              </div>
            </div>
            <div className="relative w-80 h-96 col-start-2 grid grid-flow-row auto-rows-auto">
              <Image src={"/images/magazine/mag1.png"} layout="fill" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issues;
