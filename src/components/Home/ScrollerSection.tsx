import { raleway } from "@/ui/fonts";
import {
  ExpressIcon,
  FigmaIcon,
  JavaScriptIcon,
  NestJsIcon,
  NextJsIcon,
  PostgresIcon,
  ReactIcon,
  TailwindIcon,
  TypeScriptIcon,
  VueIcon,
} from "@/ui/icons";

const ScrollerSection = () => {
  return (
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
  );
};

export default ScrollerSection;
