import Image from "next/image";
import { FunctionComponent } from "react";
import { useMediaQuery } from "@material-ui/core";

const Screen: FunctionComponent = (): JSX.Element => {
  let queryWindowSizeMobile: boolean = useMediaQuery("(max-width:660px)");
  return (
    <div className="relative w-full sm:w-fit h-full grid grid-flow-col auto-cols-auto gap-4 row-start-1">
      <div
        id="crt"
        className="relative col-start-1 row-start-2 w-fit h-fit sm:w-fit sm:h-fit p-0.5 bg-white sm:justify-self-center"
      >
        <div className="relative flex">
          {!queryWindowSizeMobile ? (
            <Image
              src="/images/screens.png"
              objectFit="cover"
              width={1000}
              height={768}
            />
          ) : (
            <Image src="/images/screens.png" objectFit="cover" width={screen?.width} height={"300"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Screen;
