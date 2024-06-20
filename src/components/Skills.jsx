import { BallCanvas } from "./canvas/Ball";
import { technologies } from "../constants";
import ScrollReveal from "scrollreveal";
import { useEffect } from "react";

function Skills() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      delay: 300,
      reset: true,
    });

    sr.reveal(".ball", {
      interval: 50,
    });
  }, []);

  const getShadowClass = (name) => {
    switch (name.toLowerCase()) {
      case "tensorflow":
        return "hover:shadow-tensorflow";
      case "mongodb":
        return "hover:shadow-mongodb";
      case "python":
        return "hover:shadow-python";
      case "html 5":
        return "hover:shadow-html";
      case "css 3":
        return "hover:shadow-css";
      case "javascript":
        return "hover:shadow-javascript";
      case "react js":
        return "hover:shadow-react";
      case "tailwind css":
        return "hover:shadow-tailwind";
      case "node js":
        return "hover:shadow-nodejs";
      case "express js":
        return "hover:shadow-expressjs";
      case "firebase":
        return "hover:shadow-firebase";
      case "git/github":
        return "hover:shadow-github";
      case "java":
        return "hover:shadow-java";
      case "c++":
        return "hover:shadow-cplusplus";
      default:
        return "";
    }
  };

  return (
    <>
      <h2
        id="skills"
        className="text-4xl font-bold text-gray-800 text-center my-8 uppercase tracking-wide"
      >
        Skills
      </h2>
      <div className="flex flex-row flex-wrap justify-center bg-bg-shade p-8 rounded-lg">
        {technologies.map((technology) => (
          <div
            className={`w-40 h-40 flex flex-col items-center m-4 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md transition-transform transform hover:-translate-y-1 ball ${getShadowClass(
              technology.name
            )}`}
            key={technology.name}
            id={`ball-${technology.name}`}
          >
            <BallCanvas icon={technology.icon} />
            <p className="text-gray-700 font-semibold mt-4 text-center">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Skills;
