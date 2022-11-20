import Image from "next/image";
import { FunctionComponent } from "react";

const Front: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-full h-full grid grid-flow-col auto-cols-auto">
      <div className="relative h-fit w-fit col-start-1 self-start justify-self-center p-10">
        <Image src={"/images/cover.png"} width={1000} height={600} priority />
      </div>
    </div>
  );
};

export default Front;
