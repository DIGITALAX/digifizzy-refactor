import Image from "next/image";
import { FunctionComponent } from "react";
import DIGIFIZZY from "./DIGIFIZZY";

const Screen: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-fit h-full grid grid-flow-col auto-cols-auto gap-4 row-start-1">
      <div
        id="crt"
        className="relative col-start-1 row-start-2 w-fit h-fit p-0.5 bg-white justify-self-center"
      >
        <div className="relative flex">
          <Image
            src="/images/screens.png"
            objectFit="cover"
            width={1000}
            height={768}
          />
        </div>
      </div>
    </div>
  );
};

export default Screen;
