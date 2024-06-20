import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import java from "../assets/java.png";
import express from "../assets/express.png";
import python from "../assets/python.png";
import firebase from "../assets/firebase.png";
import tensorflow from "../assets/tensorflow.png";
import cplusplus from "../assets/cplusplus.png";
import worldwise from "../assets/worldwise.png";
import quiz from "../assets/quiz.png";
import usePopcorn from "../assets/usePopcorn.png";
import laptop from "../assets/laptop.png";
import contactmanager from "../assets/contactmanager.png";
import restoration from "../assets/restoration.png";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Firebase",
    icon: firebase,
  },

  {
    name: "Git/GitHub",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensorflow,
  },
];

const projects = [
  {
    name: "World Wise",
    description:
      "WorldWise is a web application that allows users to track and manage their visited cities. Users can add cities they've visited, along with details like city name, date visited, notes, and location. The application integrates with Firebase for authentication and Firestore for data storage. It includes features such as displaying cities on a map with markers, linking to Wikipedia for more information, and handling user authentication securely.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: worldwise,
    source_code_link: "https://github.com/AmanJ10/worldwise",
    live_link: "https://word-wise-travel.netlify.app/",
  },
  {
    name: "React Quiz App",
    description:
      "The React Quiz App is an interactive web application designed to provide a seamless and engaging quiz-taking experience. Built using the React framework, this app offers a range of features to both users and administrators, making it a comprehensive solution for creating, managing, and taking quizzes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: quiz,
    source_code_link: "https://github.com/AmanJ10/react-quiz",
    live_link: "https://ultimate-react-challenge.netlify.app/",
  },

  {
    name: "usePopcorn",
    description:
      "usePopcorn is a React-based web application designed for movie enthusiasts to search for movies, view detailed information, and maintain a personalized list of watched movies. The application interacts with the OMDB API to fetch movie data and offers an interactive user experience for managing watched movies and ratings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: usePopcorn,
    source_code_link: "https://github.com/AmanJ10/usepopcorn",
  },

  {
    name: "Contact Manager",
    description:
      "Simple Contact Manager built with Node.js and Express.This project contains the backend implementation of MyContacts, a simple contact management application built using Node.js and Express. The project focuses on creating a RESTful API to handle CRUD operations for user contacts",
    tags: [
      {
        name: "node.js",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "blue-text-gradient",
      },
      {
        name: "CRUD",
        color: "blue-text-gradient",
      },
    ],
    image: contactmanager,
    source_code_link: "https://github.com/AmanJ10/Contact-Manager",
  },

  {
    name: "Laptop Price Predictor",
    description:
      "Predicts laptop prices based on specifications using a machine learning model trained on historical data and current market trends. Users input laptop details like processor, RAM, storage, brand etc ,through an intuitive interface. Instant price estimation is displayed aiding informed purchasing decisions.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
    ],
    image: laptop,
    source_code_link: "https://github.com/AmanJ10/Laptop-Price-Prediction",
    live_link: "https://laptop-price-prediction.streamlit.app/",
  },

  {
    name: "Image Restoration",
    description:
      "Employs deep learning models to restore and enhance images affected by various types of degradation such as noise, blur, and low resolution. Users can upload images through an intuitive interface, select the type of restoration (denoising, inpainting, super-resolution), and receive visually improved results in real-time.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "py-torch",
        color: "blue-text-gradient",
      },
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
    ],
    image: restoration,
    source_code_link: "https://github.com/Samysr17/Image-Restoration",
  },
];

export { technologies, projects };
