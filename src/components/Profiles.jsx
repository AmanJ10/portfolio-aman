import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

function Profiles() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "30px",
      duration: 2000,
      delay: 10,
      reset: true,
    });

    sr.reveal(".profile-icon", {
      interval: 10,
      scale: 0.9,
      origin: "bottom",
      distance: "30px",
    });
  }, []);

  return (
    <div className="py-16 bg-white">
      <h2
        id="profiles"
        className="text-4xl font-bold text-gray-800 text-center mb-12 uppercase tracking-wide"
      >
        Profiles
      </h2>
      <div className="flex justify-center items-center space-x-12">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="transition-transform transform hover:scale-125 hover:shadow-github p-4 rounded-full profile-icon"
        >
          <FaGithub className="text-8xl text-black" />
        </a>
        <a
          href="https://leetcode.com/"
          target="_blank"
          rel="noreferrer"
          className="transition-transform transform hover:scale-125 hover:shadow-leetcode p-4 rounded-full profile-icon"
        >
          <SiLeetcode className="text-8xl text-yellow-500" />
        </a>
        <a
          href="https://www.geeksforgeeks.org/"
          target="_blank"
          rel="noreferrer"
          className="transition-transform transform hover:scale-125 hover:shadow-gfg p-4 rounded-full profile-icon"
        >
          <SiGeeksforgeeks className="text-8xl text-green-500" />
        </a>
      </div>
    </div>
  );
}

export default Profiles;
