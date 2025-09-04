import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import HomeImage from "../assets/home/HomeImage.jpg";
import ChatBot from "../components/ChatBot";

export default function Home() {
  const [text] = useTypewriter({
    words: ["Software Engineer", "Front End Developer", "Cyber Security"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1500,
  });

  return (
    <div className="w-full h-screen text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col-reverse md:flex-row justify-center items-center h-full px-6 sm:px-12 lg:px-40"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:gap-y-6 gap-y-2 text-center sm:text-left w-full max-w-[800px]"
        >
          <h1 className="text-[1.4rem] sm:text-[1.5rem] font-bold text-[#FF0000]">
            Get Ready To Start Work
          </h1>
          <h2 className="text-[1.5rem] sm:text-[2.5rem] md:text-[3rem] font-bold">
            I am{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="bg-gradient-to-r from-[#FF0000] to-[#950101] text-transparent bg-clip-text font-extrabold"
            >
              {text}
            </motion.span>
          </h2>
          <h1 className="text-[1.5rem] sm:text-[1.8rem] md:text-[2rem] font-bold">
            Jeremia Carlo CS
          </h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
            flex flex-row justify-center items-center gap-x-3 w-[12rem] sm:w-[14rem]
            h-[3rem] mx-auto sm:mx-0 bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-full
            shadow-[0_10px_0_#FF0000] active:translate-y-[5px] active:shadow-[0_5px_0_#FF0000]
            text-white font-semibold text-[1.2rem]"
          >
            <a
              href="https://drive.google.com/drive/folders/17y_PIHIJY_ZKyBHEoOdD5Ssj0r26GFx3?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-x-2"
            >
              Download CV
              <FaFileDownload size={20} className="animate-bounce" />
            </a>
          </motion.button>
        </motion.div>
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="block sm:hidden mb-6"
        >
          <img
            className="w-[14rem] h-[14rem] sm:w-[12rem] md:w-[20rem] rounded-full border-2 border-[#FF0000] shadow-[#950101] md:border-2 md:border-[#FF0000] md:shadow-[#950101] md:shadow-2xl shadow-lg mx-auto"
            src={HomeImage}
            alt="Profile"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden sm:block ml-0 md:ml-12"
        >
          <img
            className="w-[12rem] sm:w-[20rem] md:w-[30rem] rounded-full border-2 border-[#FF0000] shadow-[#950101] md:border-2 md:border-[#FF0000] md:shadow-[#950101] md:shadow-2xl shadow-2xl"
            src={HomeImage}
            alt="Profile"
          />
        </motion.div>
      </motion.div>
      <ChatBot />
    </div>
  );
}
