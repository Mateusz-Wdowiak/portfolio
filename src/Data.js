import { AiFillGithub, AiFillLinkedin, AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaJira } from "react-icons/fa";
import { DiJavascript, DiReact, DiScrum, DiNodejsSmall } from "react-icons/di";
import { SiSass, SiTypescript } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [<AiFillGithub />, <AiFillLinkedin />];

export const skillsIcons = [
  <AiFillHtml5 />,
  <FaCss3Alt />,
  <SiSass />,
  <BsFillBootstrapFill />,
  <DiJavascript />,
  <DiReact />,
];

export const secondSkillsIcons = [
  <FaJira />,
  <DiScrum />,
  <DiNodejsSmall />,
  <SiTypescript />,
];
