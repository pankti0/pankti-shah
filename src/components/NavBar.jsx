import logo from "../assets/Pankti Shah.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import resume from "../assets/Resume -portfolio.pdf"


const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/pankti-shah0/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={35} />
        </a>
        <a href="https://github.com/pankti0" target="_blank" rel="noopener noreferrer">
          <FaGithub size={35} />
        </a>
        <a href="mailto:pashah2012@gmail.com">
          <IoIosMail size={45} />
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer">
          <IoDocumentText size={35} />
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
