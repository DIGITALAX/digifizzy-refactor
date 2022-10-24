import Link from "next/link";
import { FunctionComponent } from "react";
import { RiEyeCloseFill } from "react-icons/ri";

const Refactor: FunctionComponent = (): JSX.Element => {
  return (
    <div className="min-h-full w-full min-w-screen h-full grid grid-flow-col auto-cols-[auto auto] relative text-midWhite text-center">
      <div className="col-start-1 w-full h-full relative grid grid-flow-row auto-rows-[auto auto]">
        <div className="relative row-start-1 w-full h-fit font-lib sm:text-2xl place-self-end p-4 text-lg">
          The refresh of DIGIFIZZY is still in the works. Check back soon.
        </div>
        <RiEyeCloseFill
          color="#FAF4E8"
          size={50}
          className="relative cursor-sewingHS hover:scale-95 row-start-2 w-fit h-fit place-self-center"
        />
        <Link href="https://lenster.xyz/u/digitalax.lens">
          <a
            className="relative row-start-3 w-full h-fit font-lib text-lg cursor-sewingHS hover:text-skyBlue active:text-skyBlue"
            target={"_blank"}
            rel="noreferrer"
          >
            Follow us on Lens.
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Refactor;
