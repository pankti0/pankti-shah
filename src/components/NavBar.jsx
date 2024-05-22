import logo from "../assets/Pankti Shah.png";
import { FaLinkedin } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
//import Typed from 'react-typed'
//import { FaLinkedin } from "react-icons/fa";


const NavBar = () => {
  
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
    </div>
    </nav>
  )
}

export default NavBar
