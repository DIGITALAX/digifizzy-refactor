import Image from "next/image";
import { FunctionComponent } from "react";

const Collection: FunctionComponent = (): JSX.Element => {
  return (
    <div className="relative w-[80vw] xl:w-[67vw] h-full grid grid-flow-col auto-cols-auto row-start-3 justify-self-center">
      <div className="col-start-1 relative w-full h-fit grid grid-flow-row auto-rows-auto bg-black border-2 border-sapph gap-40 pt-28">
        <div className="relative w-full h-fit row-start-1 grid grid-flow-col auto-cols-auto p-16">
          <div className="relative w-fit h-fit col-start-1">
            <Image
              src={"/images/ship.png"}
              width={500}
              height={300}
              className="relative w-fit h-fit"
            />
          </div>
          <div className="relative z-10 w-80 h-fit bg-black p-4 text-white grid grid-flow-col auto-cols-auto col-start-2">
            <div className="relative w-fit h-fit text-white font-futur text-right col-start-1">
              description mini paragraph about this section
            </div>
          </div>
        </div>
        <div className="relative w-full h-fit row-start-2 grid grid-flow-col auto-cols-auto p-16">
          <div className="relative w-fit h-fit col-start-1 text-white text-left font-dosis place-self-center text-xs">
            Metadata about the item featyred to <br />
            the right of this section {"      "} in a format <br />
            liike this where it jumps a biit {"  "}kind of
            <br />
            like what is at the top {"    "}left of
            <br />
            DIGITALAX {"    "}flagship site
            <br />
            what it says
            <br />
            exactly, im not sure yet
          </div>
          <div className="relative w-fit h-fit col-start-2 place-self-center hover:rotate-12">
            <Image src="/images/wave.png" width={280} height={400} />
          </div>
        </div>
        <div className="relative w-full h-fit row-start-3 grid grid-flow-col auto-cols-auto p-16">
          <div className="relative w-fit h-fit col-start-2 text-white text-left font-dosis place-self-center text-xs">
            Metadata about the item featyred to <br />
            the right of this section {"      "} in a format <br />
            liike this where it jumps a biit {"  "}kind of
            <br />
            like what is at the top {"    "}left of
            <br />
            DIGITALAX {"    "}flagship site
            <br />
            what it says
            <br />
            exactly, im not sure yet
          </div>
          <div className="relative w-fit h-fit col-start-1 place-self-center hover:rotate-12">
            <Image src="/images/night.png" width={280} height={400} />
          </div>
        </div>
        <div className="relative w-full h-fit row-start-4 grid grid-flow-col auto-cols-auto p-16">
          <div className="relative w-fit h-fit col-start-1 text-white text-left font-dosis place-self-center text-xs">
            Metadata about the item featyred to <br />
            the right of this section {"      "} in a format <br />
            liike this where it jumps a biit {"  "}kind of
            <br />
            like what is at the top {"    "}left of
            <br />
            DIGITALAX {"    "}flagship site
            <br />
            what it says
            <br />
            exactly, im not sure yet
          </div>
          <div className="relative w-fit h-fit col-start-2 place-self-center hover:rotate-12">
            <Image src="/images/swish.png" width={280} height={400} />
          </div>
        </div>
        <div className="relative w-full h-fit row-start-5 grid grid-flow-col auto-cols-auto p-16">
          <div className="relative w-fit h-fit col-start-2 text-white text-left font-dosis place-self-center text-xs">
            Metadata about the item featyred to <br />
            the right of this section {"      "} in a format <br />
            liike this where it jumps a biit {"  "}kind of
            <br />
            like what is at the top {"    "}left of
            <br />
            DIGITALAX {"    "}flagship site
            <br />
            what it says
            <br />
            exactly, im not sure yet
          </div>
          <div className="relative w-fit h-fit col-start-1 place-self-center hover:rotate-12">
            <Image src="/images/court.png" width={280} height={400} />
          </div>
        </div>
        <div className="relative w-full h-fit row-start-6 grid grid-flow-col auto-cols-auto p-16">
          <div className="relative w-fit h-fit col-start-1 justify-self-center text-center text-white font-futur text-3xl leading-10">
            Text about collect on lens, <br /> get IRL and <br /> featured NFTs
            from the <br />
            collection
          </div>
        </div>
        <div className="relative w-full h-fit row-start-7 grid grid-flow-col auto-cols-auto pb-8 px-8">
          <div className="relative w-fit h-full col-start-1 grid grid-flow-col auto-cols-auto">
            <div className="relative w-fit h-fit col-start-1 grid grid-flow-col auto-cols-auto gap-2 self-end">
              <div className="relative w-fit h-fit col-start-1 row-start-1 grid grid-flow-col auto-cols-auto">
                <Image
                  src={"/images/point.png"}
                  width={20}
                  height={20}
                  className="col-start-1 place-self-center w-fit h-fit relative"
                />
              </div>
              <div className="relative w-fit h-fit col-start-1 row-start-2 grid grid-flow-col auto-cols-auto">
                <Image
                  src={"/images/point.png"}
                  width={20}
                  height={20}
                  className="col-start-1 place-self-center w-fit h-fit relative"
                />
              </div>
              <div className="relative w-fit h-fit col-start-2 row-start-2 grid grid-flow-col auto-cols-auto">
                <Image
                  src={"/images/point.png"}
                  width={20}
                  height={20}
                  className="col-start-1 place-self-center w-fit h-fit relative"
                />
              </div>
            </div>
            <div className="relative w-fit h-fit col-start-2"></div>
          </div>
          <div className="relative w-fit h-fit col-start-2 justify-self-end text-white font-dosis text-right text-2xl">
            bit more text about it <br />
            as needed
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
