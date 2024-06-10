


import React from 'react'
import { projects } from '../data/index';
import Image from 'next/image';

type Props = {
    projects: typeof projects
}

const Projects = ({ projects }: Props) => {
  return (
    <section id="projects" className="py-20">
      <h1 className="heading">
        <span className="text-purple">Projects</span> I've worked on
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
         {projects.map((project, idx) => (
            <div className="flex gap-4 md:gap-8 max-w-full">
                <Image alt='' src={project.img} width={200} height={150} />
            <div className="flex flex-col gap-4 md:gap-8 max-w-full" key={idx}>
                <div className="flex flex-col gap-4 md:gap-8 max-w-full">
                <h3 className="text-2xl md:text-3xl font-bold ">{project.title}</h3>
                <p className="max-w-2xl">{project.des}</p>
                </div>
            </div>
            </div>

         ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10"></div>
      </div>
    </section>
  )
}

export default Projects