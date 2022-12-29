import React from "react";
import "./Portfolio.scss";
import project1 from "../../asstets/project1.JPG";
import project2 from "../../asstets/project2.JPG";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <div className="container" id="portfolio">
      <motion.h2
        className="portfolioHeading"
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}>
        My others project
      </motion.h2>
      <div className="projects">
        <motion.div
          className="project"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-50, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <motion.a
            href="https://mateusz-wdowiak.github.io/Note-App/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}>
            <img src={project1} alt="project" />
          </motion.a>
          <span>
            A small project using HTML, CSS, JS and bootstrap. The application
            allows you to create notes with different colors depending on the
            category.
          </span>
        </motion.div>
        <motion.div
          className="project"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [50, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <motion.a
            href="https://mateusz-wdowiak.github.io/photo-website/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}>
            <img src={project2} alt="project" />
          </motion.a>
          <span>
            My first "big" project using React. The design is a reproduction of
            page found on the internet. It was done without any tutorials,
            everything I didn't know I had to search on the internet so it
            taught me a lot
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
