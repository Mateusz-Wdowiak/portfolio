import React, { useState } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { skillsIcons } from "../../Data";

const Skills = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="container" id="skills">
      <motion.h2
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}>
        Skills And Experience
      </motion.h2>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="skillsButtons">
        <button
          onClick={() => {
            setToggle(false);
          }}>
          Skills
        </button>
        <button
          onClick={() => {
            setToggle(true);
          }}>
          Experience
        </button>
      </motion.div>
      <motion.div
        className={toggle ? "displayNone" : "skills"}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}>
        {skillsIcons.map((icon, index) => {
          return <div key={index}>{icon}</div>;
        })}
        <span className="skillText">
          I learning programming seriously about 1 year, previously it was only
          learning to pass exam in technical school. I know Html, Css, JS, React
          and frameworks like bootstrap and sass/scss. I know at a very basic
          level TypeScript, Node and I will want to expand my knowledge.
        </span>
      </motion.div>
      <motion.div
        className={toggle ? "experience" : "displayNone"}
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: [50, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <div className="skillsExp">
          <span>2017- 2022</span>
          <span>Work as waiter, warehouseman and production worker</span>
        </div>
        <div className="skillsExp">
          <span>2022-2022</span>
          <span>Work in an online store as an intern</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
