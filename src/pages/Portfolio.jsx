import React from "react";
import PersonalWeb from "../assets/portfolio/PersonalWeb.png";
import ManagementWeb from "../assets/portfolio/ManagementWeb.png";
import KGO from "../assets/portfolio/KGO.png";
import KGOC from "../assets/portfolio/KGOC.png";
import Antria from "../assets/portfolio/Antria.png";
import Stationary from "../assets/portfolio/Stationary.png";
import { motion } from "framer-motion";
import Tabs from "../components/Tabs";
import Develop from "../assets/Develop.png";
import Portfoliocard from "../components/Portfoliocard";
import Sucofindo from "../assets/portfolio/Sucofindo.png";
import Agree from "../assets/portfolio/Agree.png";

export default function Portfolio() {
  const portfolioData = [
    {
      image: PersonalWeb,
      title: "Personal Website",
      description:
        "In this project, I developed a personal website as a platform to showcase my professional portfolio and experiences. The website was designed with a responsive layout to ensure optimal accessibility across various devices. I utilized technologies such as HTML, CSS, JavaScript, and React JS to build an engaging and functional interface, while integrating frameworks or tools like Tailwind to enhance development efficiency. This project highlights my skills in UI/UX design and front-end development, as well as my attention to detail and expertise in managing digital content",
      link: "https://github.com/Jercarlo80/Personal-Website",
    },
    {
      image: ManagementWeb,
      title: "Web Management Restaurant",
      description:
        "In this project, I developed a management system website as a management platform connected to two mobile apps: a customer mobile app and a partner mobile app. The website was designed with a responsive layout to ensure optimal accessibility across various devices. I utilized technologies such as HTML, CSS, JavaScript, and React JS to build an engaging and functional interface, while integrating frameworks or tools like Tailwind to enhance development efficiency. This project highlights my skills in UI/UX design and front-end development. The website is connected to the backend using REST API and secured with JWT Token, showcasing my attention to detail and expertise in managing digital content.",
      link: "https://github.com/Antria-id/antria-dashboard-mitra.git",
    },
    {
      image: KGO,
      title: "Kuliner.Go",
      description:
        "In this project, I developed a website that enables users to explore culinary destinations, make food orders, reserve seats, and discover culinary festivals. The website was designed with a responsive layout to ensure accessibility across various devices. Technologies such as HTML, CSS, JavaScript, and React JS were utilized to create an engaging and functional interface. Tailwind CSS was integrated to streamline development. This project demonstrates my skills in UI/UX design, front-end development, and building interactive web applications with REST API integration and JWT-based security.",
      link: "https://github.com/AhmadNaufal2525/kuliner-go-web.git",
    },
    {
      image: KGOC,
      title: "Kuliner.Go Competition",
      description:
        "This project expands on the Kuliner.Go platform, emphasizing features that enhance user engagement with culinary competitions and festivals. The website allows users to explore culinary destinations, reserve tables, order food, and participate in culinary events. Developed using HTML, CSS, JavaScript, and React JS, the website is fully responsive and integrates Tailwind CSS for design efficiency. This project highlights my expertise in front-end development, API integration, and secure user authentication using JWT.",
      link: "https://github.com/Jercarlo80/kuliner-go-competition.git",
    },
    {
      image: Antria,
      title: "Antria Landing Page",
      description:
        "This project is a landing page for a company offering queue management application services. The landing page was designed to attract potential customers and showcase the features of the company's solutions. Built with HTML, CSS, JavaScript, and React JS, the website is responsive and optimized for various screen sizes. Tailwind CSS was used to streamline the design process, highlighting my skills in creating visually appealing and effective marketing websites.",
      link: "https://github.com/Jercarlo80/antria-landing-page.git",
    },
    {
      image: Stationary,
      title: "Stationary Shop",
      description:
        "This project was developed as part of the Software Construction course to implement CRUD functionality on a website. The Stationary Shop website allows users to create, read, update, and delete data related to stationary products. It was built using HTML, CSS, JavaScript, and React JS, demonstrating my understanding of fundamental web development concepts and database integration.",
      link: "https://github.com/RPL-Project-TelU/Stationary-Shop-Management.git",
    },
    {
      image: Sucofindo,
      title: "ADMA Web Management",
      description:
        "In this project, I developed a loan management system website as a management platform connected to the Sucofindo mobile app. The website is used by business division managers. It was designed with a responsive layout to ensure optimal accessibility across various devices. I utilized technologies such as HTML, CSS, JavaScript, and React JS to build an engaging and functional interface, while integrating frameworks or tools like Tailwind to enhance development efficiency. This project highlights my skills in UI/UX design and front-end development. The website is connected to the backend using REST API.",
      link: null,
    },
    {
      image: Agree,
      title: "Dashboard Agree Insight",
      description:
        "The Agree Insight project is a web dashboard developed for Agree, a subsidiary of Telkom Indonesia. I worked on this website during my internship in the 6th semester of my studies. The website was designed with a responsive layout to ensure optimal accessibility across various devices. I utilized technologies such as HTML, CSS, JavaScript, and React JS. This project highlights my skills in UI/UX design and front-end development.",
      link: null,
    },
  ];
  const tabsPortfolio = [
    {
      title: "Front End Developer",
      content: (
        <div className="w-full md:grid md:grid-cols-2 grid grid-row md:justify-center justify-center items-center md:items-start md:gap-8 gap-2 gap-y-14 mt-8 md:mb-0 mb-[6rem]">
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
      className="w-full min-h-screen text-white md:pl-[6rem] pl-0 md:pt-[6rem] pt-[5rem] md:pb-0 pb-[8rem] z-0"
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
      <div className="w-full md:flex md:flex-row flex flex-col items-center md:items-start md:gap-x-8 gap-y-14 md:mt-8 mt-0 md:mb-0 mb-8">
        <Tabs tabs={tabsPortfolio} />
      </div>
    </motion.div>
  );
}
