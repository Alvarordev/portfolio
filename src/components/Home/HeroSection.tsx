import { raleway } from "@/ui/fonts";
import Canvas from "../Canvas";
import { ScrollDownIcon } from "@/ui/icons";

const HeroSection = () => {
  return (
    <section className="flex flex-col min-h-screen text-white relative z-0 max-w-6xl w-full mx-auto">
      <div className="h-28" />

      <Canvas />

      <div className="flex-grow flex flex-col">
        <div
          className={`${raleway.className} flex-grow flex flex-col justify-center items-center`}
        >
          <div className="mb-8 flex justify-center items-center gap-3 pt-10">
            <span className="h-[1px] w-0 bg-white line-animation"></span>
            <span className="text-lg md:text-xl opacity-0 fade-in">
              FullStack Developer
            </span>
            <span className="h-[1px] w-0 bg-white line-animation"></span>
          </div>

          <div>
            <h1
              className="font-black text-6xl md:text-7xl text-center title fade-title relative"
              data-text="ALVARO RODRIGUEZ"
            >
              ALVARO RODRIGUEZ
            </h1>
          </div>

          <div className="pt-10">
            <button className="border-2 text-white border-indigo-600 rounded-full py-2 px-3 transition-all duration-200 opacity-0 fade-in hover:bg-indigo-600 hover:scale-105">
              Descargar cv
            </button>
          </div>
        </div>

        <div className="h-24 mb-2 flex justify-center items-center opacity-0 fade-in">
          <div className="scroll-down">
            <ScrollDownIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
