"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <p> NodeJS / Express / React / NextJS/ PostgreSQL / MongoDB / Git </p>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Computer and Information Engineering, Universidade Federal do Rio de
          Janeiro (2019 - current)
        </li>
        <li>Game Development, Estacio (2023 - current)</li>
        <li>Programming/IT, ORT Institute of Technology (2016 - 2018)</li>
        <li>PUC for a semester - Introduction to Math, PUC Rio (2017)</li>
        <li>PUC for a semester - Computer Science, PUC Rio (2016)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Realms Web3 Community, Junior Programmer (Jan. 2024 - current)</li>
        <li>
          Realms Web3 Community, Intern - GameDev and BackendDev (Jun. 2022 -
          Dec. 2023)
        </li>
        <li>Escola ORT, IT teacher (Aug. 2023 - current)</li>
        <li>Scientific Initiation Student, DiscoveRx (Dec. 2023 - current)</li>
        <li>
          Scientific Initiation Student, GTA - Grupo de Teleinformática e
          Automação (Sep. 2020 - Jun. 2022)
        </li>
        <li>Microlins, Intern (Dec. 2017 - Jan. 2018)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>TOEFL iBT - Score: 102 (Jan 2024 - Jan 2026)</li>
        <li>
          MERN Stack Bootcamp 2023 - MongoDB, Express, Reacy & NodeJS (Jul 2023)
        </li>
        <li>
          Unity parte 1: criação de um jogo de sobrevivência à zumbis para Web
          (Mar 2023)
        </li>
        <li>Japanese Kanji Proficiency Test level 10 (Dec 2022)</li>
        <li>
          Certificado de Participação - 11ª Semana de Integração Acadêmica da
          UFRJ (Feb 2022)
        </li>
        <li>Cambridge English: Advanced (CAE) - CEFR level C1 (Jan 2019)</li>
        <li>World ORT STEM Communication Awards 2018 (Dec 2018)</li>
        <li>Doulingo English Test (Jul 2021 - Jul 2023)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section>
      <div className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/images/about_image.png" width={500} height={500} />

          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>

            <p className="text-base lg:text-lg">
              Hello! I'm Luiz Carlos Aguiar Carrion, a versatile developer with
              a passion for creating engaging experiences. My expertise spans
              backend, frontend, and game development, where I leverage a
              diverse skill set to craft innovative solutions. With strong soft
              skills in communication, collaboration, and problem-solving, I
              thrive in dynamic environments and excel at delivering
              high-quality results. Additionally, I have extensive experience
              with version control systems like Git, ensuring efficient code
              management and seamless collaboration within development teams.
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="flex flex-row w-full mt-8 justify-between">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>

          <div className="mt-8 mb-8 flex justify-center">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
