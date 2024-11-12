import React, { useState } from "react";
import projectImg1 from "../assets/ng1.jpg";
import projectImg2 from "../assets/ng2.jpg";
import projectImg3 from "../assets/ng3.png";
import projectImg4 from "../assets/p1.png";
import projectImg5 from "../assets/p2.png";
import projectImg6 from "../assets/p3.png";
import projectImg7 from "../assets/po1.png";
import projectImg8 from "../assets/po2.png";
import projectImg9 from "../assets/po3.png";
import projectImg10 from "../assets/po4.png";
import projectImg11 from "../assets/po5.png";
import projectImg12 from "../assets/po6.png";
import projectImg13 from "../assets/po7.png";

const Projects = () => {
  const projects = [
    {
      title: "Number Guessing Game",
      description: "A simple number guessing game where the user tries to guess a number between 1 and 100.",
      imgSrcs: [projectImg1, projectImg2, projectImg3],
      demoLink: "https://amitcodingninja.github.io/NumberGuessingGame/",
      codeLink: "https://github.com/Amitcodingninja/NumberGuessingGame",
    },
    {
      title: "Word Guessing Game",
      description: "A fun word guessing game where players have to guess a word from a given set of letters.",
      imgSrcs: [projectImg4, projectImg5, projectImg6],
      demoLink: "https://amitcodingninja.github.io/Word-Guessing-Game/",
      codeLink: "https://github.com/Amitcodingninja/Word-Guessing-Game",
    },
    {
      title: "My Portfolio",
      description: "A personal portfolio to showcase my skills, projects, and achievements.",
      imgSrcs: [
        projectImg7,
        projectImg8,
        projectImg9,
        projectImg10,
        projectImg11,
        projectImg12,
        projectImg13,
      ],
      demoLink: " https://amitcodingninja.github.io/amitkumar/",
      codeLink: "https://github.com/Amitcodingninja/amitkumar",
    },
  ];

  return (
    <section id="projects"> {/* Added id to link with header navigation */}
      <h1 className="text-center pb-4 text-5xl underline font-bold">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-gray-100 min">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.imgSrcs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.imgSrcs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-80 bg-gray-200">
        <img
          src={project.imgSrcs[currentIndex]}
          alt={project.title}
          className="w-full h-full object-contain"
        />
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white px-2 py-1 rounded hover:bg-opacity-75"
        >
          ◀
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white px-2 py-1 rounded hover:bg-opacity-75"
        >
          ▶
        </button>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 underline">
          {project.title}
        </h2>
        <p className="text-gray-700 mb-4">{project.description}</p> {/* Description Added */}
        <div className="flex space-x-4">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-white bg-blue-500 py-2 rounded hover:bg-blue-600 transition"
          >
            View Demo
          </a>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-white bg-green-500 py-2 rounded hover:bg-green-600 transition"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
