import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "react-spring";
import { FaLinkedin } from "react-icons/fa";
import Jercarlo from "../assets/aboutme/Jercarlo.jpg";
import Educard from "../components/Educard";
import Telu from "../assets/aboutme/Telu.jpg";
import SMA9 from "../assets/aboutme/SMA9.png";
import Expcard from "../components/Expcard";
import Tabs from "../components/Tabs";
import BTP from "../assets/aboutme/BTP.png";
import Sucofindo from "../assets/aboutme/Sucofindo.png";
import Agree from "../assets/aboutme/Agree.png";
import QRCode from "../assets/aboutme/QRCode.png";
import Certificate from "../components/Certificate";
import Certi1 from "../assets/aboutme/Certi1.png";
import Develop from "../assets/Develop.png";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 250,
    config: { mass: 1, tension: 20, frinction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

export default function AboutMe() {
  const educationData = [
    {
      image: Telu,
      title: "Telkom University",
      degree: "Bachelor's Degree, Computer Software Engineering",
      year: "2020 - 2024",
      gpa: "GPA 3.55 / 4.00 Cumlaude",
    },
    {
      image: SMA9,
      title: "SMA Negeri 9 Jakarta",
      degree: "Natural Sciences",
      year: "2017 - 2020",
      gpa: "Average Report Score: 88,5",
    },
  ];
  const certificateData = [
    {
      image: Certi1,
      title: "Sertifikat Bootcamp React JS #7 Edspert.id",
      company: "Edspert.id",
      year: "Aug 2023",
      skill: "Front End Development",
    },
  ];
  const tabsEducation = [
    {
      title: "Collage and School",
      content: (
        <div className="w-full md:flex md:flex-row flex flex-col items-center md:items-start md:gap-x-8 gap-y-14 mt-8">
          {educationData.map((edu, index) => (
            <Educard
              key={index}
              image={edu.image}
              title={edu.title}
              degree={edu.degree}
              year={edu.year}
              gpa={edu.gpa}
            />
          ))}
        </div>
      ),
    },
    {
      title: "IT Certification Bootcamp",
      content: (
        <div
          className="
            w-full md:flex md:flex-row flex flex-col items-center md:items-start md:gap-x-8 gap-y-14 mt-8"
        >
          {certificateData.map((certi, index) => (
            <Certificate
              key={index}
              image={certi.image}
              title={certi.title}
              company={certi.company}
              year={certi.year}
              skill={certi.skill}
            />
          ))}
        </div>
      ),
    },
  ];
  const expData = [
    {
      image: BTP,
      role: "Front End Developer",
      company: "Bandung Techno Park",
      status: "Full Time",
      time: "Jan 2024 - Dec 2024 | 1 yr",
      location: "Bandung, West Java, Indonesia | On-site",
    },
    {
      image: Sucofindo,
      role: "Front End Developer",
      company: "PT. SUCOFINDO",
      status: "Internship",
      time: "Sep 2023 - Dec 2023 | 4 mos",
      location: "Bandung, West Java, Indonesia | Hybrid",
    },
    {
      image: Agree,
      role: "Front End Developer",
      company: "Agree",
      status: "Internship",
      time: "Jul 2023 - Aug 2023 | 2 mos",
      location: "Telkom STO Kebayoran | Hybrid",
    },
  ];
  const tabsExperience = [
    {
      title: "Front End Developer",
      content: (
        <div className="w-full h-full md:flex md:flex-row flex flex-col-reverse items-center md:items-start md:gap-x-8 gap-y-14 md:mb-0 mb-[6rem]">
          <div className="w-full md:flex md:flex-col flex flex-col items-center md:items-start md:gap-x-8 gap-y-14 mt-8">
            {expData.map((exp, index) => (
              <Expcard
                key={index}
                image={exp.image}
                company={exp.company}
                role={exp.role}
                status={exp.status}
                time={exp.time}
                location={exp.location}
              />
            ))}
          </div>
          <div
            className="bg-gradient-to-b from-[#FF0000] to-[#950101] w-[20rem] sm:w-[24rem] md:w-[40rem] h-[45rem] sm:h-[30rem] md:h-[46.8rem] 
            rounded-xl mt-8"
          >
            <div className="w-full h-full flex flex-col">
              <h1 className="text-[1.6rem] text-center p-4 font-bold">
                Total Time Of Experience in Front End Developer
              </h1>
              <div className="md:w-[23.5rem] w-[19rem] h-[0.2rem] ml-2 mr-2 bg-white rounded-2xl" />
              <div
                className="flex flex-col mt-4 ml-4 gap-y-4"
                href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:wght@300;600&family=Roboto+Slab:wght@100..900&display=swap"
              >
                <div className="flex flex-row gap-x-2">
                  <div className="w-[4rem] md:w-[6rem] md:h-[6rem] h-[4rem] bg-white rounded-2xl">
                    <h1 className="flex justify-center items-center md:w-[6rem] w-[4rem] md:h-[6rem] h-[4rem] text-[#FF0000] md:text-[4.4rem] text-[3rem]">
                      <Number n={0} />
                    </h1>
                  </div>
                  <div className="w-[4rem] md:w-[6rem] md:h-[6rem] h-[4rem] bg-white rounded-2xl">
                    <h1 className="flex justify-center items-center md:w-[6rem] w-[4rem] md:h-[6rem] h-[4rem] text-[#FF0000] md:text-[4.4rem] text-[3rem]">
                      <Number n={1} />
                    </h1>
                  </div>
                  <h1 className="md:text-[3rem] text-[2rem] md:h-[6rem] h-[4rem] flex justify-center items-center">
                    Years
                  </h1>
                </div>
                <div className="flex flex-row gap-x-2">
                  <div className="w-[4rem] md:w-[6rem] md:h-[6rem] h-[4rem] bg-white rounded-2xl">
                    <h1 className="flex justify-center items-center md:w-[6rem] w-[4rem] md:h-[6rem] h-[4rem] text-[#FF0000] md:text-[4.4rem] text-[3rem]">
                      <Number n={0} />
                    </h1>
                  </div>
                  <div className="w-[4rem] md:w-[6rem] md:h-[6rem] h-[4rem] bg-white rounded-2xl">
                    <h1 className="flex justify-center items-center md:w-[6rem] w-[4rem] md:h-[6rem] h-[4rem] text-[#FF0000] md:text-[4.4rem] text-[3rem]">
                      <Number n={6} />
                    </h1>
                  </div>
                  <h1 className="md:text-[3rem] text-[2rem] md:h-[6rem] h-[4rem] flex justify-center items-center">
                    Month
                  </h1>
                </div>
              </div>
              <div className="md:w-[23.5rem] w-[19rem] h-[0.2rem] ml-2 mr-2 mt-6 bg-white rounded-2xl" />
              <div className="flex flex-row md:w-[23.5rem] w-[19rem] h-[21.5rem] bg-white ml-2 mr-2 mt-6 rounded-2xl">
                <img className="w-[16rem] mb-[0.5rem]" src={QRCode} />
                <FaLinkedin
                  className="mt-[2rem] md:mr-0 mr-[1.3rem]"
                  size={70}
                  color="#2A67BC"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Cyber Security",
      content:
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img className="w-[30rem]" src={Develop}/>
          <h1 className="font-bold text-[5rem]">Coming Soon !!!</h1>
        </div>,
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
          About Me
        </h1>
        <div className="w-[5.4rem] h-[0.2rem] bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-lg" />
      </div>
      {/* Content Section */}
      <div className="flex flex-col items-center md:flex-row md:items-start mt-8 gap-12">
        {/* Profile Image */}
        <div className="w-[18rem] h-[18rem] md:w-[26rem] md:h-[26rem] rounded-full overflow-hidden shadow-lg shadow-[#B7B7B7]">
          <img
            className="w-full h-full object-cover"
            src={Jercarlo}
            alt="Profile"
          />
        </div>
        {/* Text Section */}
        <div className="text-justify md:text-justify overflow-y-auto px-6 md:px-0">
          <p className="text-[1rem] md:text-[1.2rem] md:w-[45rem] leading-relaxed mb-6">
            Fresh graduate with a bachelor's degree in Software Engineering from
            the Faculty of Informatics at Telkom University. I have a strong
            interest and passion for Frontend Web Development. I have
            approximately one year of experience in the field of Frontend Web
            Development, including internships at Telkom Indonesia, Sucofindo,
            and Bandung Techno Park (BTP). I have honed my frontend web
            development skills by working with HTML, CSS, JavaScript, React JS,
            and Tailwind CSS. I am ready to contribute to the professional
            world, especially in the technology sector, with a focus on Frontend
            Web Development, and I enjoy exploring and learning new things in
            this field.
          </p>
          <p className="text-[1rem] md:text-[1.2rem] md:w-[45rem] leading-relaxed">
            I also have an interest in the cybersecurity sector. Currently, I am
            pursuing the CEH (Certified Ethical Hacker) certification at
            Course.Net. With a strong enthusiasm for learning, I am confident in
            my ability to grow as both a developer and a cybersecurity
            professional.
          </p>
        </div>
      </div>
      {/* Skills Section */}
      <div className="w-full h-full flex flex-col md:w-full md:h-full md:flex md:flex-col">
        <div className="flex flex-col items-center md:items-start mt-12">
          <h1 className="font-bold text-4xl mb-2 text-center md:text-left">
            Education
          </h1>
          <div className="w-[6.2rem] h-[0.2rem] bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-lg" />
        </div>
        <div className="w-full md:flex md:flex-row flex flex-col items-center md:items-start md:gap-x-8 gap-y-14 mt-8">
          <Tabs tabs={tabsEducation} />
        </div>
        <div className="flex flex-col items-center md:items-start md:mt-12 mt-[12rem]">
          <h1 className="font-bold text-4xl mb-2 text-center md:text-left">
            Experience
          </h1>
          <div className="w-[6.2rem] h-[0.2rem] bg-gradient-to-r from-[#FF0000] to-[#950101] rounded-lg" />
        </div>
        <div className="w-full md:flex md:flex-col flex flex-col items-center md:items-start md:gap-x-8 gap-y-14 mt-8">
          <Tabs tabs={tabsExperience} />
        </div>
      </div>
    </motion.div>
  );
}
