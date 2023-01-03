import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const Custom404: FunctionComponent = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="relative w-full h-screen lg:h-screen grid grid-flow-col auto-cols-auto z-50">
      <div
        className="relative w-fit h-fit text-white place-self-center lg:left-48 font-futur cursor-sewingHS active:scale-95 text-center lg:text-base text-sm lg:top-auto"
        onClick={() => router.push("/")}
      >
        Page Not Found... Head Home...
      </div>
    </div>
  );
};

export default Custom404;
