import Image from "next/image";
import { FunctionComponent } from "react";
import { AiOutlineForward, AiOutlineBackward } from "react-icons/ai";
import useIssues from "./hooks/useIssues";
import Volume from "./Volume";

const Issues: FunctionComponent = (): JSX.Element => {
  const { currentIssue, handleIssueUp, handleIssueDown, allIssues } =
    useIssues();
    
  return (
    <div className="relative w-full h-full grid grid-flow-col auto-cols-auto row-start-2 justify-self-center">
      <div className="col-start-1 relative w-full h-fit grid grid-flow-col auto-cols-auto bg-black border-2 border-white lg:gap-0 gap-16">
        <div className="relative h-fit w-fit col-start-1 font-futur text-white text-center justify-self-center row-start-1 pt-10 text-[4vw] sm:text-2xl md:text-lg md:text-2xl xl:text-4xl leading-10 z-10 sm:px-0 px-4">
          Message stuff goes here. <br /> Something abvout creatrs
          <br />
          on the edge, the <br /> persistence of public <br /> memory, and 24/7
          latent
          <br /> waves…
        </div>
        <Volume />
        <div className="relative w-full h-full col-start-1 row-start-2 grid grid-flow-col auto-cols-auto md:pt-16 pb-10">
          <div className="col-start-1 relative w-full sm:w-fit h-fit col-start-1 row-start-2 grid grid-flow-col auto-cols-auto gap-10 sm:gap-28 pb-6 pt-10 sm:pt-28 place-self-center">
            <div className="relative w-fit h-fit row-start-1 col-start-1 grid grid-flow-row auto-rows-auto gap-10 place-self-center">
              <div className="relative w-fit h-fit row-start-1 text-white font-atmos text-7xl text-center place-self-center">
                past <br /> issues*
              </div>
              <div className="relative w-fit h-fit row-start-2 grid grid-flow-col auto-cols-auto place-self-center">
                <div className="col-start-1 border-2 border-white w-fit h-fit px-3 py-4 relative grid grid-flow-col auto-cols-auto gap-3 rounded">
                  <div
                    className={`relative w-fit h-fit col-start-1 place-self-center ${
                      currentIssue !== 1 && "cursor-sewingHS"
                    }`}
                    onClick={() => handleIssueDown(currentIssue)}
                  >
                    <AiOutlineBackward
                      size={35}
                      color={currentIssue === 1 ? "gray" : "white"}
                    />
                  </div>
                  <div className="relative w-10 h-10 col-start-2 text-white font-dosis place-self-center text-3xl grid grid-flow-col auto-cols-auto">
                    <div className="relative text-center w-fit h-fit place-self-center">
                      {currentIssue}
                    </div>
                  </div>
                  <div
                    className={`relative w-fit h-fit col-start-3 place-self-center ${
                      currentIssue !== allIssues.length && "cursor-sewingHS"
                    }`}
                    onClick={() => handleIssueUp(currentIssue)}
                  >
                    <AiOutlineForward
                      size={35}
                      color={
                        currentIssue === allIssues.length ? "gray" : "white"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="relative w-fit h-fit row-start-3 text-white font-dosis text-center place-self-center">
                arweave in the process...
              </div>
            </div>
            <div className="relative w-full h-[150vw] galaxy:w-80 galaxy:h-[120vw] sm:h-[60vw] md:h-[50vw] lg:h-[40vw] xl:h-[30vw] row-start-2 col-start-1 sm:row-start-1 sm:col-start-2 grid grid-flow-row auto-rows-auto cursor-sewingHS hover:mix-blend-hard-light">
              <Image
                src={`/images/magazine/mag${currentIssue}.webp`}
                layout="fill"
                className="bg-sapph"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issues;
