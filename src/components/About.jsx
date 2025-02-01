import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Section Title */}
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>

      <div className="flex flex-wrap items-center">
        {/* Left Side (Image) */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center p-8"
        >
          <img
            className="rounded-2xl max-w-full h-auto"
            src={aboutImg}
            alt="about"
          />
        </motion.div>

        {/* Right Side (Text) */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 p-8"
        >
          <p className="text-lg text-left lg:text-start">{ABOUT_TEXT}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
