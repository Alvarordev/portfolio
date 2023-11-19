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
import Image from "next/image";

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
              <h1
                className={`${raleway.className} font-extrabold text-7xl title fade-title`}
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

      <section className="min-h-[900px]">
        <div className="flex flex-col gap-16 mt-16 max-w-6xl w-full mx-auto text-white px-4 xl:px-1">
          <header className="pt-20 flex items-center gap-4">
            <div className="bg-white h-3 w-3 rounded-full shadow"></div>
            <h2
              className={`${raleway.className} text-xl font-bold text-neutral-100`}
            >
              PROYECTOS DESTACADOS
            </h2>
          </header>

          <article className="relative flex border-4 border-[#393939] bg-[#151515] h-[600px] rounded-xl max-w-[1080px]">
            <div className="flex flex-col pt-10 pl-16">
              <div className="flex w-full gap-4 pb-10">
                <span className="w-full h-1 bg-indigo-600 rounded-lg" />
                <span className="w-full h-1 bg-white rounded-lg" />
                <span className="w-full h-1 bg-white rounded-lg" />
              </div>

              <h3
                className={`${raleway.className} text-4xl font-extrabold pb-8`}
              >
                CLINICONNECT
              </h3>
              <p className="text-neutral-200 pb-8">
                Aplicacion web que te permite reservar y monitorear tus citas
                medicas de manera sencilla y eficiente.
              </p>
              <ul className="flex gap-2 flex-wrap [&>li]:bg-indigo-600 [&>li]:px-1.5 [&>li]:rounded-md [&>li]:py-0.5">
                <li>React</li>
                <li>NextJs</li>
                <li>Express</li>
                <li>MySql</li>
                <li>Sequelize</li>
                <li>CSS</li>
              </ul>
            </div>

            <div className="relative flex flex-grow justify-end py-[23px]">
              <div className="absolute top-0 right-48 h-full w-1 bg-[#393939] "></div>
              <div className="bg-indigo-600 h-full w-[550px] rounded-xl translate-x-16">
                <div className="relative h-[515px] w-[520px] rounded-xl ml-[15px] mt-[16px]">
                  <Image
                    src="/cliniconnect-mockup.png"
                    alt=""
                    fill
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="min-h-[900px]">
        <div className="py-16 text-white max-w-6xl mx-auto w-full flex flex-col gap-20 px-4 xl:px-0">
          <header className="pt-20 flex items-center gap-4">
            <div className="bg-white h-3 w-3 rounded-full shadow"></div>
            <h2
              className={`${raleway.className} text-xl md:text-2xl font-extrabold text-neutral-100`}
            >
              MIS HABILIDADES
            </h2>
          </header>

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
