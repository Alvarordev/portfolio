import { raleway } from "@/ui/fonts";

const ContactSection = () => {
  return (
    <section className="max-w-6xl text-center w-full mx-auto py-32 text-white px-4 xl:px-0 relative z-10">
      <h3 className="text-xl text-indigo-600 font-semibold pb-2">
        ¿Quieres Iniciar un Nuevo Proyecto?
      </h3>
      <h2 className={`text-5xl font-extrabold pb-12 ${raleway.className}`}>
        ¡Pongamonos en Contacto!
      </h2>
      <a
        href="https://www.linkedin.com/in/alvaro-rodr%C3%ADguez-6b9969210"
        target="_blank"
        className="py-3 px-6 text-xl font-medium bg-indigo-600 rounded-3xl hover:saturate-150 transition-all"
      >
        Hablemos
      </a>
    </section>
  );
};

export default ContactSection;
