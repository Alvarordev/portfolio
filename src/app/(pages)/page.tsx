import { raleway } from "@/ui/fonts";
import {
  ExpressIcon,
  FigmaIcon,
  JavaScriptIcon,
  NestJsIcon,
  NextJsIcon,
  PostgresIcon,
  ReactIcon,
  ScrollDownIcon,
  TailwindIcon,
  TypeScriptIcon,
  VueIcon,
} from "@/ui/icons";

export default function Home() {
  return (
    <main className="flex-grow bg-[#121212] overflow-x-hidden">
      <div className="relative meteorites">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <section className="flex flex-col min-h-screen text-white relative ">
        <div className="h-28" />

        <div className="flex-grow flex flex-col">
          <div className="flex-grow max-w-6xl w-full mx-auto flex flex-col justify-center items-center">
            <div className="mb-8 flex justify-center items-center gap-3 pt-10">
              <span className="h-[1px] w-0 bg-white line-animation"></span>
              <span className="text-xl opacity-0 fade-in">
                FullStack Developer
              </span>
              <span className="h-[1px] w-0 bg-white line-animation"></span>
            </div>

            <div>
              <h1 className={`${raleway.className} font-extrabold text-7xl title fade-title`} data-text='ALVARO RODRIGUEZ'>
                ALVARO RODRIGUEZ
              </h1>
            </div>

            <div className="pt-10">
              <button className="border-2 text-white border-indigo-600 rounded-full py-2 px-3 transition-all duration-200 opacity-0 fade-in hover:bg-indigo-600 hover:scale-105">
                Descarga mi cv
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

      <section className="min-h-[900px]">
        <div className="h-[700px] mt-16 max-w-6xl w-full mx-auto text-white">
          <header className="pt-28">
            <h2 className="text-4xl font-semibold text-center">Proyectos Destacados</h2>
          </header>
        </div>
      </section>

      <section className="min-h-[900px]">
        <div className="py-16 text-white max-w-6xl mx-auto w-full flex flex-col">
          <div className="flex flex-nowrap overflow-hidden scroller">
            <ul className="flex gap-16 w-fit scroller-inner">
              <li className="flex flex-col justify-center items-center">
                <TypeScriptIcon size="80" />
                <span>TypeScript</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <JavaScriptIcon size="76" />
                <span className="pt-1">JavaScript</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <ReactIcon size="80" />
                <span>React</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <NextJsIcon size="80" />
                <span>NextJs</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <VueIcon size="80" />
                <span>VueJs</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <ExpressIcon size="80" />
                <span>Express</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <NestJsIcon size="80" />
                <span>NestJs</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <TailwindIcon size="80" />
                <span>Tailwind</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <FigmaIcon color="" size="80" />
                <span>Figma</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <PostgresIcon size="80" />
                <span>Postgres</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <TypeScriptIcon size="80" />
                <span>TypeScript</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <JavaScriptIcon size="76" />
                <span className="pt-1">JavaScript</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <ReactIcon size="80" />
                <span>React</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <NextJsIcon size="80" />
                <span>NextJs</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <VueIcon size="80" />
                <span>VueJs</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <ExpressIcon size="80" />
                <span>Express</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <NestJsIcon size="80" />
                <span>NestJs</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <TailwindIcon size="80" />
                <span>Tailwind</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <FigmaIcon color="" size="80" />
                <span>Figma</span>
              </li>
              <li className="flex flex-col justify-center items-center">
                <PostgresIcon size="80" />
                <span>Postgres</span>
              </li>
            </ul>
          </div>

          <div></div>
        </div>
      </section>
    </main>
  );
}
