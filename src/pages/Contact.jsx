import React from "react";
import { motion } from "framer-motion";
import Jercarlo from "../assets/aboutme/Jercarlo.png";
import { FaInstagram, FaLinkedin, FaGithub, FaTiktok } from "react-icons/fa";

export default function Contact() {
  const socialMedia = [
    {
      name: "Instagram",
      icon: <FaInstagram color="white" size={40} />,
      bgGradient:
        "bg-gradient-to-r from-instagram-orange via-instagram-pink via-instagram-purple to-instagram-blue",
      link: "https://www.instagram.com/jercarlo/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin color="white" size={40} />,
      bgGradient: "bg-gradient-to-r from-[#0A66C2] to-[#004182]",
      link: "https://www.linkedin.com/in/jeremia-carlo-christianto-silitonga-50136a1ba/",
    },
    {
      name: "GitHub",
      icon: <FaGithub color="white" size={40} />,
      bgGradient: "bg-gradient-to-r from-gray-700 to-gray-900",
      link: "https://github.com/Jercarlo80",
    },
    {
      name: "TikTok",
      icon: <FaTiktok color="white" size={40} />,
      bgGradient: "bg-gradient-to-r from-black to-gray-800",
      link: "https://www.tiktok.com/@jeremia.carlo.c?_t=ZS-8sK9WJjpGYj&_r=1",
    },
  ];
  return (
    <motion.div
      className="w-full min-h-full text-white md:pl-[6rem] pl-0 md:pt-[6.8rem] pt-[7rem] pb-[4rem] z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="font-bold text-4xl mb-2 text-center md:text-left">
          Contact Me
        </h1>
        <div className="w-[5.4rem] h-[0.2rem] bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-lg" />
      </div>
      {/* Contact Information */}
      <div className="w-full h-full flex justify-center items-center mb-8">
        <div
          className="
          w-[20rem] sm:w-[24rem] md:w-[30rem] h-[24rem] sm:h-[30rem] md:h-[30rem] 
          rounded-xl shadow-[#950101] shadow-lg drop-shadow-sm mt-[4rem] flex flex-col justify-center"
        >
          {/* Social Media Buttons */}
          <div className="grid grid-cols-2 justify-center items-center md:mt-0 mt-18 md:p-[8rem] p-[2.55rem] gap-8">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-[6rem] h-[3.5rem] flex justify-center items-center ${social.bgGradient} p-4 rounded-2xl transition-transform transform hover:scale-110`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
