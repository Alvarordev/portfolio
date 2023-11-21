import { raleway } from "@/ui/fonts";
import Image from "next/image";

const AboutSection = () => {
    return ( 
        <section
        id="about"
        className="flex flex-col max-w-6xl mx-auto text-white px-4 xl:px-0 relative z-10 pt-20"
      >
        <header className="flex items-center gap-4">
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
     );
}
 
export default AboutSection;