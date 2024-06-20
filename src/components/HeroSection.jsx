import "../styles/App.css";
import photo from "../assets/photo1.jpg";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function HeroSection() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "right",
      distance: "30px",
      duration: 1500,
      delay: 100,
      reset: true,
    });

    sr.reveal("#heroImage", {
      scale: 0.9,
    });
  }, []);

  return (
    <section
      id="heroSection"
      className="grid grid-cols-1 md:grid-cols-2 py-16 md:py-32 px-10 md:px-20 gap-8 bg-bg-shade items-center"
    >
      <div
        id="about"
        className="order-2 md:order-1 flex flex-col items-start gap-6 md:gap-8"
      >
        <div className="flex flex-col items-start gap-3 md:gap-5">
          <p className="text-2xl md:text-3xl font-bold">Hey, I&apos;m Aman</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-none">
            <span className="text-primary">Full Stack</span>
            <br />
            Developer
          </h1>
          <p className="text-base md:text-xl text-darkblue leading-snug">
            I have a solid foundation in web development and machine learning,
            with a passion for creating innovative solutions.
          </p>
        </div>
        <a
          href={import.meta.env.VITE_RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" mt-5 btn btn-primary btn text-gray-200  md:mt-6 duration-300 hover:-translate-y-1 px-10 md:px-6 py-3 md:py-2 rounded-lg text-xl md:text-base font-semibold bg-[#212223]">
            <i className="fa-solid fa-download"></i>
            RESUME
          </button>
        </a>
      </div>
      <div className="order-1 md:order-2 flex justify-center">
        <img
          src={photo}
          id="heroImage"
          alt="Hero Section"
          className="w-3/4 md:w-1/2 h-auto object-cover"
        />
      </div>
    </section>
  );
}
