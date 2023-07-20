// import { NavLink } from "react-router-dom";
import { FaInstagram,FaLinkedin,FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-black text-base-content">
    <div className="grid grid-flow-col gap-4">
      <a className="link link-hover">About us</a> 
      <a className="link link-hover">Contact</a> 
      <a className="link link-hover">Jobs</a> 
      <a className="link link-hover">Press kit</a>
    </div> 
    <div>
      <div className="grid grid-flow-col gap-4 text-4xl">
        <FaInstagram className="text-purple-300 "/> <FaLinkedin className="text-sky-500" /> <FaEnvelope className="text-red-300"/>
      </div>
    </div> 
  </footer>
  );
};

export default Footer;
