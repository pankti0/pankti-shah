import React, { useState } from "react";
import clarity from "../assets/clarity.png";
import ppe from "../assets/ppe.png";
import binchiling from "../assets/binchiling.png";
import wtw from "../assets/wtw.png";
import ml from "../assets/ml.jpg";
import bus from "../assets/bus app.png";

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: clarity,
      name: "Clarity",
      description: "Our team won $1000 cash prize for a full stack app using Java, XML and SQL for students to add university events to their calendar and allow school administrators to market events to students ",
      link: 'https://youtu.be/laLXkHBYD6Y?si=AeZemwLqQoD8W3zy',
      repo: 'https://github.com/beepobb/Clarity'
    },
    {
      id: 2,
      src: ppe,
      name: "SeekingSafety",
      description: "An application to detect helmets and safety goggles of workers at construction sites using tensorflow, OpenCV and peeking duck.",
      repo: 'https://github.com/pankti0/seeking-safety'
    },
    {
      id: 3,
      src: binchiling,
      name: "BinChilling",
      description: "A smart bin  with a 90s arcade style game on its body that can be played by throwing the trash inside the bin. The bin was programmed using an Arduino and to solve the littering issue faced outside Expo MRT.",
      repo: 'https://github.com/junjie50/BinChillin'
    },
    {
      id: 4,
      src: wtw,
      name: "What the Whack",
      description: "A FPGA based rock, paper, scissors game with a twist coded in Lucid to implement a finite state machine from scratch.",
      link: 'https://youtu.be/e_6V2bQWH4g?si=FYgIcDw_3DObkaxh',
      
    },
    {
      id: 5,
      src: ml,
      name: "Intro to ML workshop",
      description: "Hosted a workshop on Intro to Machine Learning with a team of 3 for 40 people teaching scikitlearn for supervised learning.",
    },
    {
      id: 6,
      src: bus,
      name: "Bus Tracker Prototype",
      description: "An app prototype to track bus schedules and routes to reduce carbon footprints.",
      link:"https://www.figma.com/proto/W85ko00qWHnaFHBxLk30IR/Untitled?node-id=0-3&t=MCFJ3JFe7aoWaRQs-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A3&show-proto-sidebar=1"
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  const handleClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <div name="portfolio">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-center text-white">
            Projects & Experiences
          </p>
          <p className="py-6 text-white text-center">Check out some of my work </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, name, link, repo, description }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="projects"
                className="rounded-md duration-200 hover:scale-105 object-cover w-full h-64"
                onClick={() => handleClick({ name, description })}
              />
              <div className="flex flex-col items-center justify-center">
                <button
                  className="w-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent mt-2 text-2xl"
                  onClick={() => handleClick({ name, description })}
                >
                  {name}
                </button>
                <div className="flex items-center justify-center w-full">
                  {link && (
                    <button
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      onClick={() => window.open(link, "_blank")}
                    >
                      Demo
                    </button>
                  )}
                  {repo && (
                    <button
                      className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                      onClick={() => window.open(repo, "_blank")}
                    >
                      GitHub
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-md mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-black">{selectedProject.name}</h2>
              <p className="mb-4 text-black">{selectedProject.description}</p>
              <div className="flex justify-center">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
