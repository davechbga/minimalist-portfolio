import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-52"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"About"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text="
In 2016, I embarked on a journey to create custom Tumblr themes, which led me into the fascinating world of coding and web development. Fast forward to today, I have had the privilege of developing software for an advertising agency and a basketball team..."
            />

            <AnimatedBody
              delay={0.1}
              text="I am passionate about creating beautiful and functional web applications that enhance people's lives. I am always seeking new opportunities to learn and grow as a developer."
            />

            <AnimatedBody
              delay={0.2}
              text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
            />
            <div className="flex  justify-end gap-10 text-[16px] font-bold text-[#e4ded7]  sm:gap-14 sm:text-[24px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
              <Link className="inline-flex items-center gap-4" href="/resume.pdf" target="_blank" aria-label="View Resume">
                <FaExternalLinkAlt size={30} />
                <AnimatedTitle
                  text={"FULL RESUMÉ"}
                  className={
                    "text-[16px] font-bold text-[#e4ded7] sm:text-[20px] md:text-[16px] lg:text-[28px]"
                  }
                  wordSpace={"mr-[0.25em]"}
                  charSpace={"mr-[0.01em]"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
