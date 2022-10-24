import Link from "next/link";
import { FunctionComponent } from "react";
import { HeaderProps } from "../../types/general.types";

const Header: FunctionComponent<HeaderProps> = ({ rewind }): JSX.Element => {
  return (
    <div
      ref={rewind}
      className="relative grid grid-flow-col auto-cols-[auto auto] w-full gap-10 pt-6 pl-8 h-20 pb-20"
    >
      <Link href="/">
        <a>
          <div className="relative col-start-1 text-white text-6xl row-start-1 md:w-fit min-h-full h-full font-rain cursor-sewingHS">
            X
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Header;
