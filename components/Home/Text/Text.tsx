import { FunctionComponent } from "react";

const Text: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-full grid grid-flow-row auto-rows-auto pt-10 text-black">
      <div className="relative row-start-1 h-1 w-full bg-black"></div>
      <div className="relative row-start-2 h-full w-full grid grid-flow-col auto-cols-auto">
        <div className="relative col-start-1 grid grid-flow-row auto-rows-auto p-16">
          <div className="relative w-fit h-40 w-2/3 row-start-1 col-start-1 font-amM text-5xl">
          Some Big Kind of Text Statement Here. Some kind of Manifesto.
          </div>
          <div className="relative w-fit h-fit row-start-2 col-start-2 place-self-center grid grid-flow-row auto-rows-auto gap-6 font-amE text-sm">
            <div className="relative w-fit h-fit row-start-1">
              A magazine for the metaverse.
            </div>
            <div className="relative h-fit row-start-2 w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </div>
          </div>
        </div>
      </div>
      <div className="relative row-start-3 h-1 w-full bg-black"></div>
    </div>
  );
};

export default Text;
