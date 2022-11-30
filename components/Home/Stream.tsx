import { FunctionComponent, useContext } from "react";
import Draggable from "react-draggable";
import { AiFillCloseCircle } from "react-icons/ai";
import { GlobalContext } from "../../pages/_app";
import { useMediaQuery } from "@material-ui/core";

const Stream: FunctionComponent = (): JSX.Element => {
  const { setOpenFrame, newLink } = useContext(GlobalContext);
  let queryWindowSize1200: boolean = useMediaQuery("(max-width:1200px)");
  return (
    <div className="absolute w-fit h-fit z-40">
      <Draggable
        defaultPosition={{ x: !queryWindowSize1200 ? 200 : 0, y: 20 }}
        cancel=".frame"
        enableUserSelectHack={false}
      >
        <div className="relative bg-black w-fit h-fit px-8 pb-8 pt-4 grid grid-flow-col auto-cols-auto cursor-sewingHS place-self-center">
          <div
            className="relative w-fit h-fit justify-self-end row-start-1 pb-4"
            onClick={() => setOpenFrame(false)}
          >
            <AiFillCloseCircle size={25} color={"white"} />
          </div>
          <div className="relative w-fit h-fit justify-self-end row-start-2 border border-white">
            <iframe
              width={!queryWindowSize1200 ? "900" : "550"}
              height={!queryWindowSize1200 ? "650" : "400"}
              src={newLink}
              title="Digifizzy Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="frame"
            ></iframe>
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default Stream;
