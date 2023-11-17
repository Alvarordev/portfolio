import { raleway } from "@/ui/fonts";
import { ScrollDownIcon } from "@/ui/icons";

export default function Home() {
  return (
    <main className="flex-grow bg-[#121212] overflow-x-hidden">
      <div className="relative meteorites">
        <span/>
        <span/>
        <span/>
        <span/>
        <span/>
        <span/>
      </div>

      <section className="flex flex-col min-h-screen text-white relative ">
        <div className="h-28" />

        <div className="flex-grow flex flex-col">
          <div className="flex-grow max-w-6xl w-full mx-auto flex flex-col justify-center items-center">
            <div className="mb-8 flex justify-center items-center gap-3">
              <span className="h-[1px] w-[120px] bg-white"></span>
              <span className="text-xl">FullStack Developer</span>
              <span className="h-[1px] w-[120px] bg-white"></span>
            </div>

            <div>
              <h1 className={`${raleway.className} font-bold text-7xl`}>
                ALVARO RODRIGUEZ
              </h1>
            </div>
          </div>

          <div className="h-24 mb-2 flex justify-center items-center scroll-down">
            <ScrollDownIcon />
          </div>
        </div>
      </section>

      <section className="min-h-[900px]"></section>
    </main>
  );
}
