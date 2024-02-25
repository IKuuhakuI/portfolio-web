"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

import TabButton from "./TabButton";

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
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/images/about_image.png" width={500} height={500} />

          <div>
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

            <div className="flex flex-row mt-8">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
