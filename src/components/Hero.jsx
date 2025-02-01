import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/kevinRushProfile.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 0.5,
    },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 flex flex-wrap items-center">
      {/* Left Section (Text) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start pl-8 sm:pl-16">
        <motion.h1
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="pb-4 text-4xl sm:text-6xl font-thin tracking-tight lg:mt-16"
        >
          Gautam Kumar
        </motion.h1>
        <motion.span
          variants={container(0.5)}
          initial="hidden"
          animate="visible"
          className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl sm:text-3xl tracking-tight text-transparent"
        >
          Full Stack Developer
        </motion.span>
        <motion.p
          variants={container(1)}
          initial="hidden"
          animate="visible"
          className="my-2 max-w-xl py-4 font-light tracking-tighter text-center lg:text-left"
        >
          {HERO_CONTENT}
        </motion.p>
      </div>

      {/* Right Section (Image, Adjusted Placement) */}
      <div className="w-full lg:w-1/2 flex justify-end pr-16">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          src={profilepic}
          alt="Gautam Kumar"
          className="max-w-[280px] sm:max-w-[350px] h-auto rounded-xl shadow-lg -ml-4"
        />
      </div>
    </div>
  );
};

export default Hero;
