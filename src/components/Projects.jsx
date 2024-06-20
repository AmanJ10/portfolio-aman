/* eslint-disable react/no-unknown-property */

import { projects } from "../constants";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

function Projects() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "30px",
      duration: 2000,
      delay: 100,
      reset: true,
    });

    sr.reveal(".project-card", {
      interval: 200,
      scale: 0.9,
      origin: "bottom",
      distance: "30px",
    });
  }, []);

  return (
    <>
      <h2
        id="projects"
        className="text-4xl font-bold text-gray-800 text-center my-8 uppercase tracking-wide"
      >
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden shadow-lg rounded-lg project-card transform transition-transform duration-300 hover:scale-105"
          >
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="p-6 pb-20">
              <h3 className="text-l font-semibold mb-2 text-gray-900">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`text-xs font-semibold inline-block py-1 px-2 rounded ${tag.color}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-4 left-6 flex gap-4">
                <a
                  href={project.source_code_link}
                  className="text-indigo-500 hover:text-indigo-700 font-semibold flex items-center"
                >
                  <span>View Source</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                    className="ml-1"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                {project.live_link && (
                  <a
                    href={project.live_link}
                    className="text-green-500 hover:text-green-700 font-semibold flex items-center"
                  >
                    <span>Demo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 20 19"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                        stroke="currentColor"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
