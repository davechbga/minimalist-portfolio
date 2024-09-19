import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";

import AnimatedWords from "../animations/AnimatedWords";

import AnimatedLogo from "../animations/AnimatedLogo";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[100vh] w-full justify-center"
      id="home"
      initial="initial"
      animate="animate"
    >
      <HeroBackground />
      <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">
        <div
          className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
        >
          <AnimatedLogo width={200} height={200} />
          <AnimatedTitle
            text={"David Chiriboga"}
            className={
              "mb-1 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px]  md:text-[60px] lg:text-[80px]"
            }
            wordSpace={"mr-[15px]"}
            charSpace={"mr-[0.001em]"}
          />
          <AnimatedWords
            title={"Frontend Developer"}
            style={
              "max-w-[250px] flex items-center  text-[20px] font-extrabold  leading-[3em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-[25px] md:text-[25px] lg:text-center lg:text-[10px] xl:text-[25px]"
            }
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
