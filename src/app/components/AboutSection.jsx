import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section>
      <div className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
          <Image src="/images/about_image.png" width={500} height={500} />

          <div>
            <h2>About Me</h2>

            <p>
              Hello! I'm Luiz Carlos Aguiar Carrion, a versatile developer with
              a passion for creating engaging experiences. My expertise lies in
              backend, frontend, and game development, where I leverage a
              diverse skill set to craft innovative solutions.
              <br />
              <b>Backend Development</b>: Proficient in Node.js, FastAPI, and
              Python, with experience in Express.js, MongoDB, and PostgreSQL.
              <br />
              <b>Frontend Development:</b> Skilled in React, Next.js, and
              JavaScript, focusing on responsive and intuitive user interfaces.
              <br />
              <b>Game Development:</b> Experienced with Unity, specializing in
              captivating gameplay mechanics and immersive worlds.
              <br />
              <b>Technologies</b>: Proficient in TypeScript, JavaScript, and
              Python, adept at building RESTful APIs, implementing real-time
              features, and developing complex algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
