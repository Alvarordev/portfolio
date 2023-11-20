import ProjectsCard from "@/components/ProjectsCard";
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
          <div
            className={`${raleway.className} flex-grow max-w-6xl w-full mx-auto flex flex-col justify-center items-center`}
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

      <section>
        <div className="flex flex-col gap-16 mt-16 max-w-6xl w-full mx-auto text-white px-4 xl:px-1">
          <header className="pt-20 flex items-center gap-4">
            <div className="bg-white h-3 w-3 rounded-full shadow"></div>
            <h2
              className={`${raleway.className} text-xl font-bold text-neutral-100`}
            >
              PROYECTOS DESTACADOS
            </h2>
          </header>

          <ProjectsCard />
        </div>
      </section>

      <section>
        <div className="text-white max-w-6xl mx-auto w-full flex flex-col gap-20 px-4 xl:px-0">
          <header className="pt-32 flex items-center gap-4">
            <div className="bg-white h-3 w-3 rounded-full shadow"></div>
            <h2
              className={`${raleway.className} text-xl font-bold text-neutral-100`}
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
        </div>
      </section>

      <section className="flex flex-col max-w-6xl mx-auto text-white px-4 xl:px-0">
        <header className="pt-32 flex items-center gap-4">
          <div className="bg-white h-3 w-3 rounded-full shadow"></div>
          <h2
            className={`${raleway.className} text-xl font-bold text-neutral-100`}
          >
            SOBRE MI
          </h2>
        </header>

        <div className="flex flex-col md:grid md:grid-cols-12 md:justify-between py-16 px-4 lg:px-10">
          <div className="pt-10 lg:pt-0 md:col-span-4 hidden md:flex">
            <div className="flex justify-center md:justify-start md:pl-10">
              <Image
                height={280}
                width={280}
                src="/mock-photo.png"
                alt=""
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="col-span-1" />

          <div className="flex flex-col w-full relative md:col-span-7">
            <div className="w-full">
              <h3
                className={`text-4xl text-center md:text-start md:text-5xl font-extrabold ${raleway.className}`}
              >
                Alvaro Rodríguez
              </h3>
             
              <ul className="flex justify-between md:justify-start gap-1 md:gap-5 py-4">
                <li className="px-2 md:px-3 py-1 border-2 text-sm border-indigo-600 rounded-3xl">
                  FullStack Developer
                </li>
                <li className="px-2 md:px-3 py-1 border-2 text-sm border-indigo-600 rounded-3xl">
                  Web & Mobile Designer
                </li>
              </ul>

              <div className="flex justify-center py-5 md:hidden">
                <Image
                  height={280}
                  width={280}
                  src="/mock-photo.png"
                  alt=""
                  className="rounded-xl"
                />
              </div>

              <p className="text-m">
                ¡Hola! 👋 Soy Álvaro Rodríguez, un desarrollador FullStack con
                más de 1 año de experiencia. Me apasiona el diseño de interfaces
                de usuario cautivadoras y funcionales. Disfruto creando
                soluciones que convierten ideas de negocio en realidad,
                empoderando tanto a empresas como a individuos. ¡Listo para
                impulsar proyectos con creatividad y habilidades técnicas! 🚀
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
