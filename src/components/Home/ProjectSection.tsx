import { raleway } from "@/ui/fonts";
import ProjectsCard from "../ProjectsCard";

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="relative z-10  max-w-6xl w-full mx-auto text-white "
    >
      <div className="flex flex-col gap-16 mt-16  px-4 xl:px-1">
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
  );
};

export default ProjectSection;
