import { FunctionComponent } from "react";

const DIGIFIZZY: FunctionComponent = (): JSX.Element => {
  return (
    <div className="absolute z-30 w-full h-fit grid grid-flow-col auto-cols-auto col-start-1">
      <div
        id="digi"
        className="relative w-fit h-fit row-start-1 text-left font-atmos text-white saturate-200 opacity-80 text-[35vw] justify-self-start leading-none"
      >
        DIGI
      </div>
      <div
        id="digi"
        className="relative w-fit h-fit row-start-2 justify-self-end text-right font-atmos text-white saturate-200 opacity-80 text-[35vw] leading-none"
      >
        FIZZY
      </div>
    </div>
  );
};

export default DIGIFIZZY;
