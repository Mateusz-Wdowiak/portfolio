import React from "react";
import "./About.scss";
import Portfolio from "../../asstets/portfolio.JPG";
import { AiFillHome } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container" id="about">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}>
        about me
      </motion.h1>
      <div className="aboutContainer">
        <motion.div
          className="picture"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <img src={Portfolio} alt="Portfolio" />
        </motion.div>
        <motion.div
          className="aboutText"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <span className="aboutMe">
            I'm Mateusz. I have 21 years old and looking for a job or internship
            on Front end developer. IT experience I have gained is to operate an
            online store. In other jobs i learned human service or patience.
            I'am self-taught who like lern new things and working in a group.
          </span>
          <div className="aboutInfo">
            <div>
              <BsFillPersonFill /> <span>Mateusz Wdowiak</span>
            </div>
            <div>
              <AiFillHome /> <span>Wałbrzych</span>
            </div>
            <div>
              <FaEnvelope /> <span>wdowiak.mateusz21@gmail.com</span>
            </div>
            <a href="/">Download CV</a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
