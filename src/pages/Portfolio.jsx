import React from "react";
import PersonalWeb from "../assets/portfolio/PersonalWeb.png";
import { motion } from "framer-motion";
import Tabs from "../components/Tabs";
import Develop from "../assets/Develop.png";
import Portfoliocard from "../components/Portfoliocard";

export default function Portfolio() {
    const portfolioData = [
        {
            image: PersonalWeb,
            title: "Personal Website",
            description: "In this project, I developed a personal website as a platform to showcase my professional portfolio and experiences. The website was designed with a responsive layout to ensure optimal accessibility across various devices. I utilized technologies such as HTML, CSS, JavaScript, and React JS to build an engaging and functional interface, while integrating frameworks or tools like Tailwind to enhance development efficiency. This project highlights my skills in UI/UX design and front-end development, as well as my attention to detail and expertise in managing digital content",
            link: "",
        }
    ]
  const tabsPortfolio = [
    {
      title: "Front End Developer",
      content: (
        <div className="w-full md:flex md:flex-row flex flex-col items-center md:items-start md:gap-x-8 gap-y-14 mt-8">
          {portfolioData.map((prt, index) => (
            <Portfoliocard 
                key={index}
                image={prt.image}
                title={prt.title}
                description={prt.description}
                link={prt.link}
            />
          ))}
        </div>
      ),
    },
    {
      title: "Cyber Security",
      content: (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img className="w-[30rem]" src={Develop} />
          <h1 className="font-bold text-[5rem]">Coming Soon !!!</h1>
        </div>
      ),
    },
  ];
  return (
    <motion.div
      className="w-full min-h-screen text-white md:pl-[6rem] pl-0 md:pt-[6.8rem] pt-[7rem] pb-[4rem] z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Header Section */}
      <div className="flex flex-col items-center md:items-start">
        <h1 className="font-bold text-4xl mb-2 text-center md:text-left">
          Portfolio
        </h1>
        <div className="w-[5.4rem] h-[0.2rem] bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-lg" />
      </div>
      {/* Projects Section */}
      <div className="w-full md:flex md:flex-row flex flex-col items-center md:items-start md:gap-x-8 gap-y-14 mt-8">
        <Tabs tabs={tabsPortfolio} />
      </div>
    </motion.div>
  );
}
