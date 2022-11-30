import { FunctionComponent } from "react";

const Volume: FunctionComponent = (): JSX.Element => {
  return (
    <div className="absolute z-0 pt-80 sm:pt-40 lg:pt-10 w-full h-fit grid grid-flow-col auto-cols-auto col-start-1">
      <div
        id="digi2"
        className="relative w-fit h-fit row-start-1 text-center font-atmos text-white  opacity-80 text-[40vw] sm:text-[30vw] lg:text-[25vw] justify-self-center leading-none"
      >
        Vol. 2
      </div>
    </div>
  );
};

export default Volume;
