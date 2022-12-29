import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import Portfolio from "../../asstets/portfolio.JPG";

const Home = () => {
  return (
    <motion.div
      className="container"
      id="home"
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 2,
        delay: 0.5,
      }}>
      <div className="profileImage">
        <img src={Portfolio} alt="Portfolio" />
      </div>
      <div className="profileText">
        <div className="me">
          <h2>
            Hi, I'am <span className="textName">Mateusz Wdowiak</span>
          </h2>
          <span className="aspiring">Aspiring Front end developer</span>
        </div>
        <span className="profileAboutMe">
          Liking challenges and learning new things
        </span>
        <motion.a
          href="#contact"
          animate={{ y: [0, -15] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
            delay: 0.5,
          }}>
          Contact me
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Home;
