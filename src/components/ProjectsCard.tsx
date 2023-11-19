"use client";

import { works } from "@/projects";
import { raleway } from "@/ui/fonts";
import { LeftArrowIcon, RightArrowIcon } from "@/ui/icons";
import Image from "next/image";
import { useState } from "react";

const ProjectsCard = () => {
  const [projects, setProjects] = useState(works[0]);

  const previousProject = () => {
    if (works.indexOf(projects) === 0) setProjects(works[works.length - 1]);
    else setProjects(works[works.indexOf(projects) - 1])
  };

  const nextProject = () => {
    if (works.indexOf(projects) === works.length - 1) setProjects(works[0]);
    else setProjects(works[works.indexOf(projects) + 1]);
  };

  return (
    <div>
      <article className="relative flex border-4 border-[#393939] bg-[#151515] h-[600px] rounded-xl max-w-[1080px]">
        <div className="flex flex-col pt-10 pl-16">
          <div className="flex w-full gap-4 pb-10">
            <span className={`w-full h-1 ${works.indexOf(projects) === 0 ? 'bg-indigo-600' : 'bg-white'} rounded-lg`} />
            <span className={`w-full h-1 ${works.indexOf(projects) === 1 ? 'bg-indigo-600' : 'bg-white'} rounded-lg`} />
            <span className={`w-full h-1 ${works.indexOf(projects) === 2 ? 'bg-indigo-600' : 'bg-white'} rounded-lg`} />
          </div>

          <h3
            className={`${raleway.className} text-4xl font-extrabold pb-8 uppercase`}
          >
            {projects.title}
          </h3>
          <p className="text-neutral-200 pb-8">{projects.description}</p>
          <ul className="flex gap-2 flex-wrap [&>li]:bg-indigo-600 [&>li]:px-1.5 [&>li]:rounded-md [&>li]:py-0.5">
            {projects.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="flex-grow flex gap-10 items-end py-10">
            <div
              className=" text-[#393939] cursor-pointer border-[3px] border-[#393939] rounded-full p-2 transition-all  hover:border-[#fff] hover:text-white"
              onClick={previousProject}
            >
              <LeftArrowIcon size='36'/>
            </div>
            <div
              className=" text-[#393939]  cursor-pointer border-[3px] border-[#393939]  rounded-full p-2 transition-all hover:border-[#fff] hover:text-white"
              onClick={nextProject}
            >
              <RightArrowIcon size='36'/>
            </div>
          </div>
        </div>

        <div className="relative flex flex-grow justify-end py-[23px]">
          <div className="absolute top-0 right-48 h-full w-1 bg-[#393939] "></div>
          <div className="bg-indigo-600 h-full w-[550px] rounded-xl translate-x-16">
            <div className="relative h-[515px] w-[520px] rounded-xl ml-[15px] mt-[16px]">
              <Image src={projects.img} alt="" fill className="rounded-lg" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ProjectsCard;
