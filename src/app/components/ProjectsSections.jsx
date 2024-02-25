import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Infinity Worldle",
    description: "[ADD DESCRIPTION]",
    image: "/images/projects/infinity_worldle.png",
    tag: ["All", "Games", "JS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Fullstack Go Web",
    description: "[ADD DESCRIPTION]",
    image: "/images/projects/fullstack_go.png",
    tag: ["All", "Frontend", "Backend", "JS", "GO"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "StockWise",
    description: "[ADD DESCRIPTION]",
    image: "/images/projects/stockwise.jpeg",
    tag: ["All", "Frontend", "Backend", "TypeScript"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "ZiulFlix",
    description: "[ADD DESCRIPTION]",
    image: "/images/projects/ziul_flix.jpeg",
    tag: ["All", "Frontend", "Backend", "JS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Python Web Scraping",
    description: "[ADD DESCRIPTION]",
    image: "/images/projects/web-scraping-with-python.png",
    tag: ["All", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "All Heroes Must Die",
    description: "[ADD DESCRIPTION]",
    image: "/images/projects/all_heroes_must_die.png",
    tag: ["All", "Games", "C#"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Portfolio Web",
    description: "[ADD DESCRIPTION]",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Frontend", "JS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Pong4Math",
    description: "[ADD DESCRIPTION]",
    image: "/images/projects/pong_4_math.png",
    tag: ["All", "Games", "JS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Infinity Questions",
    description: "[ADD DESCRIPTION]",
    image: "/images/projects/infinity_questions.png",
    tag: ["All", "Games", "Python"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSections = () => {
  return (
    <>
      <h2
        className="
          text-center 
          text-4xl 
          font-bold 
          text-white 
          mt-4
          mb-8
          md:mb-12
        "
      >
        My Projects
      </h2>

      <div className="text-white flex flex-row justify-center items-center gap-2 pb-6">
        <button
          className="
            rounded-full 
            border-2 
            border-purple-500 
            px-6 
            py-3
            text-xl 
            cursor-pointer
          "
        >
          All
        </button>
        <button
          className="
            rounded-full 
            border-2 
            border-slate-600
            hover:border-white
            px-6 
            py-3
            text-xl 
            cursor-pointer
          "
        >
          Backend
        </button>
        <button
          className="
            rounded-full 
            border-2 
            border-slate-600
            hover:border-white
            px-6 
            py-3
            text-xl 
            cursor-pointer
          "
        >
          Frontend
        </button>
        <button
          className="
            rounded-full 
            border-2 
            border-slate-600
            hover:border-white
            px-6 
            py-3
            text-xl 
            cursor-pointer
          "
        >
          Games
        </button>
        <button
          className="
            rounded-full 
            border-2 
            border-slate-600
            hover:border-white
            px-6 
            py-3
            text-xl 
            cursor-pointer
          "
        >
          JS
        </button>
        <button
          className="
            rounded-full 
            border-2 
            border-slate-600
            hover:border-white
            px-6 
            py-3
            text-xl 
            cursor-pointer
          "
        >
          TypeScript
        </button>
        <button
          className="
            rounded-full 
            border-2 
            border-slate-600
            hover:border-white
            px-6 
            py-3
            text-xl 
            cursor-pointer
          "
        >
          Python
        </button>
        <button
          className="
            rounded-full 
            border-2 
            border-slate-600
            hover:border-white
            px-6 
            py-3
            text-xl 
            cursor-pointer
          "
        >
          GO
        </button>
        <button
          className="
            rounded-full 
            border-2 
            border-slate-600
            hover:border-white
            px-6 
            py-3
            text-xl 
            cursor-pointer
          "
        >
          C#
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 md:gap-12-">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tag}
            gitUrl={project.gitUrl}
            previewUrl={project.gitUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSections;
