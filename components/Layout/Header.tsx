import { FunctionComponent } from "react";

const Header: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-full grid grid-flow-col auto-cols-auto row-start-1">
      <div className="relative grid grid-flow-col auto-cols-auto col-start-1 row-start-1 w-full h-fit pt-3 pb-6 px-4">
        <div className="relative col-start-1 w-fit h-fit grid grid-flow-col auto-cols-auto gap-3 justify-self-end">
          <div className="relative w-fit h-fit col-start-1 border-2 border-white grid grid-flow-col auto-cols-auto cursor-sewingHS">
            <iframe
              width="200"
              height="115"
              src="https://www.youtube.com/embed/dXowrolrFz0?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="cursor-sewingHS"
            ></iframe>
          </div>
          <div className="relative w-14 h-10 col-start-2 rounded-xl border border-black bg-white cursor-sewingHS"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
