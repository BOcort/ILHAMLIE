// import { NavLink } from "react-router-dom";
import { FaInstagram,FaLinkedin,FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-black text-base-content">
    <div className="grid grid-flow-col gap-4">
      <a className="hover:text-orange-300">About us</a> 
      <a className="hover:text-orange-300">Contact</a> 
      <a className="hover:text-orange-300">Jobs</a> 
      <a className="hover:text-orange-300">Press kit</a>
    </div> 
    <div>
      <div className="grid grid-flow-col gap-4 text-4xl">
        <a href="https://www.instagram.com/ilhamlie_/" target="_blank" rel="noreferrer"><FaInstagram className="text-purple-300 "/></a> <a target="_blank" href="https://www.linkedin.com/in/ilhamlie/" rel="noreferrer"><FaLinkedin className="text-sky-500" /></a><a href="https://github.com/BOcort" target="_blank" rel="noreferrer"><FaGithub className="text-red-300"/></a>
      </div>
    </div> 
  </footer>
  );
};

export default Footer;
