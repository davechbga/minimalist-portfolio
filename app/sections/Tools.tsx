import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import {
  SiGit,
  SiGithub,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiMongodb,
  SiNodedotjs,
  SiTailwindcss,
  SiWordpress,
  SiAngular,
  SiAstro,
  SiBootstrap,
  SiVuedotjs,
  SiFigma,
  SiAdobe,
  SiPrisma,
} from "react-icons/si";
import AnimatedTools from "../animations/AnimatedTools";

const Tools = () => {
  const frontendIcons = [
    { icon: SiTypescript, tooltip: "Typescript" },
    { icon: SiJavascript, tooltip: "Javascript" },
    { icon: SiTailwindcss, tooltip: "Tailwind CSS" },
    { icon: SiBootstrap, tooltip: "Bootstrap" },
    { icon: SiReact, tooltip: "React" },
    { icon: SiVuedotjs, tooltip: "Vue.js" },
    { icon: SiAngular, tooltip: "Angular" },
    { icon: SiAstro, tooltip: "Astro" },
    { icon: SiNextdotjs, tooltip: "Next.js" },
  ];

  const backendIcons = [
    { icon: SiPrisma, tooltip: "Prisma" },
    { icon: SiNodedotjs, tooltip: "Node.js" },
    { icon: SiPostgresql, tooltip: "PostgreSQL" },
    { icon: SiMysql, tooltip: "MySQL" },
    { icon: SiMongodb, tooltip: "MongoDB" },
  ];

  const otherIcons = [
    { icon: SiGithub, tooltip: "Github" },
    { icon: SiGit, tooltip: "Git" },
    { icon: SiWordpress, tooltip: "Wordpress" },
    { icon: SiFigma, tooltip: "Figma" },
    { icon: SiAdobe, tooltip: "Adobe" },
  ];

  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-48"
      id="tools"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"Skills"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.2} text="Frontend" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4 gap-y-8"
                delay={0.2}
                stepSize={0.1}
                iconSize={50}
              >
                {frontendIcons.map(({ icon: Icon, tooltip }, index) => (
                  <Icon key={index} data-blobity-tooltip={tooltip} size={50} />
                ))}
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.3} text="Backend" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.3}
                stepSize={0.1}
                iconSize={50}
              >
                {backendIcons.map(({ icon: Icon, tooltip }, index) => (
                  <Icon key={index} data-blobity-tooltip={tooltip} size={50} />
                ))}
              </AnimatedTools>
            </div>
          </div>
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-bold leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[40px] md:leading-relaxed lg:mb-16 lg:w-[50%]">
            <AnimatedBody delay={0.4} text="Other" />
            <div>
              <AnimatedTools
                className="grid grid-cols-5 gap-4"
                delay={0.4}
                stepSize={0.1}
                iconSize={50}
              >
                {otherIcons.map(({ icon: Icon, tooltip }, index) => (
                  <Icon key={index} data-blobity-tooltip={tooltip} size={50} />
                ))}
              </AnimatedTools>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
