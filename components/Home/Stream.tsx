import { FunctionComponent, useContext } from "react";
import Draggable from "react-draggable";
import { AiFillCloseCircle } from "react-icons/ai";
import { GlobalContext } from "../../pages/_app";

const Stream: FunctionComponent = (): JSX.Element => {
  const { setOpenFrame } = useContext(GlobalContext);
  return (
    <div className="absolute w-fit h-fit z-40">
      <Draggable
        defaultPosition={{ x: 200, y: 20 }}
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
              width="900"
              height="650"
              src="https://www.youtube.com/embed/dXowrolrFz0?controls=0?rel=0&autoplay=1&mute=1"
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
