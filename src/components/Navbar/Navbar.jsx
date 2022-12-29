import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import { navLinks } from "../../Data";
import { HiMenu, HiX } from "react-icons/hi";
import { socialIcons } from "../../Data";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scroll, setScroll] = useState(false);

  const menuType = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 50,
      transition: {
        duration: 0.8,
      },
    },
  };

  const navLinksType = {
    hidden: {
      display: "none",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: -30,
      transition: {
        delay: 0.8,
      },
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  });
  return (
    <div className={scroll ? "header active" : "header"}>
      <div className="navContainer">
        <div className="logo">
          <h3>MW</h3>
        </div>
        <ul className="navLinks">
          {navLinks.map((navLink, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setToggle(false);
                }}>
                <a href={`#${navLink}`}>{navLink}</a>
              </li>
            );
          })}
        </ul>
        <div className="socialIcons">
          {socialIcons.map((icon, index) => {
            return (
              <a
                key={index}
                href={
                  index === 1
                    ? "https://linkedin.com/in/wdowiak-mateusz"
                    : "https://github.com/Mateusz-Wdowiak"
                }
                target="_blank"
                rel="noreferrer">
                {icon}
              </a>
            );
          })}
        </div>
        <div className="menu">
          <HiMenu
            onClick={() => {
              setToggle(true);
            }}
          />
        </div>
        <motion.div
          className="closeMenu"
          variants={menuType}
          initial="hidden"
          animate={toggle ? "visible" : "hidden"}></motion.div>
        <motion.div
          className="menuX"
          variants={navLinksType}
          animate={toggle ? "visible" : "hidden"}>
          <HiX
            onClick={() => {
              setToggle(false);
            }}
          />
          {navLinks.map((navLink, index) => {
            return (
              <li key={index}>
                <a
                  href={`#${navLink}`}
                  onClick={() => {
                    setToggle(false);
                  }}>
                  {navLink}
                </a>
              </li>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
