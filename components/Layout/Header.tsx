import Image from "next/image";
import Link from "next/link";
import { FunctionComponent, useState } from "react";
import { HeaderProps } from "../../types/general.types";

const Header: FunctionComponent<HeaderProps> = ({ rewind }): JSX.Element => {
  const [blur, setBlur] = useState<boolean>(false);
  return (
    <div
      ref={rewind}
      className="relative grid grid-flow-col auto-cols-[auto auto] w-full h-fit justify-left pt-12 overflow-x-hidden text-black/70"
    >
      <div className="relative col-start-1 row-start-1 w-fit h-fit self-center justify-self-start left-40">
        <div className="relative grid-flow-row auto-rows-[auto auto] md:w-fit h-full min-h-full font-fira text-xs grid md:place-self-start place-self-center text-center md:text-left md:pr-20 lg:pr-11 gap-6">
          <div className="relative h-fit md:w-fit row-start-1 col-start-1">
            Digifizzy Magazine
          </div>
          <div className="relative h-fit md:w-fit row-start-2 col-start-1">
            <p className="pb-3">Issue 17 / 103 Page Count</p>
            <p className="pl-2 text-red-500">64 69 67 69 66 69 7A 7A 79</p>
            <p className="pl-2 text-blue-500">6D 61 67 61 7A 69 6E 65</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
