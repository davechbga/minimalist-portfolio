import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type AnimatedLogoProps = {
  width: number;
  height: number;
};

export default function AnimatedLogo({ width, height }: AnimatedLogoProps) {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  const logoAnimation = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 1,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={ctrls}
      variants={logoAnimation}
      className="flex items-center justify-center pb-12"
    >
      <motion.img src="/logo.svg" alt="Logo" width={width} height={height} />
    </motion.div>
  );
}
