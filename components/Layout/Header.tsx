import { FunctionComponent, useContext } from "react";
import { GlobalContext } from "../../pages/_app";
import { useMediaQuery } from "@material-ui/core";
import Image from "next/image";

const Header: FunctionComponent = (): JSX.Element => {
  const { openFrame, setOpenFrame, newLink } = useContext(GlobalContext);

  let queryWindowSizeMobile: boolean = useMediaQuery("(max-width:640px)");

  return (
    <div className="relative w-full h-full sm:h-36 grid grid-flow-col auto-cols-auto row-start-1 z-30">
      <div className="relative grid grid-flow-col auto-cols-auto col-start-1 row-start-1 w-full h-fit sm:pt-3 pb-6 sm:px-4">
        <div className="relative col-start-1 w-fit h-fit grid grid-flow-col auto-cols-auto gap-3 justify-self-end">
          {!openFrame && (
            <div className="relative w-full h-full sm:pt-0 pt-72 sm:w-fit sm:h-fit col-start-1 sm:border-2 sm:border-white grid grid-flow-col auto-cols-auto cursor-sewingHS">
              <iframe
                width={!queryWindowSizeMobile ? "200" : screen?.width}
                height={!queryWindowSizeMobile ? "115" : "400"}
                src={newLink}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="cursor-sewingHS"
              ></iframe>
            </div>
          )}
          {!queryWindowSizeMobile && (
            <div
              className="relative w-fit h-fit col-start-2 cursor-sewingHS active:scale-95"
              onClick={() => setOpenFrame(!openFrame)}
            >
              <Image src="/images/tv.png" width={70} height={45} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
