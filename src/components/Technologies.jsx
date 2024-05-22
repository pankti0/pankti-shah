import { RiReactjsLine} from "react-icons/ri";
import {TbBrandNextjs} from "react-icons/tb";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub, FaGitAlt, FaSwift, FaPython } from 'react-icons/fa';
import { SiGraphql, SiTailwindcss, SiExpress, SiMongodb, SiRedux, SiAndroidstudio, SiTensorflow, SiPandas, SiScikitlearn, SiFlask, SiOpenai   } from 'react-icons/si';


const Technologies = () => {
    const techs = [
        {
          id: 1,
          icon: <FaHtml5 className="text-orange-500"/>,
          title: "HTML",
          style: "shadow-orange-500",
        },
        {
          id: 2,
          icon: <FaCss3Alt className="text-blue-500" />,
          title: "CSS",
          style: "shadow-blue-500",
          
        },
        {
          id: 3,
          icon: <FaJsSquare className="text-yellow-500"/>,
          title: "JavaScript",
          style: "shadow-yellow-500",
        
        },
        {
          id: 4,
          icon: <FaReact className="text-cyan-300"/>,
          title: "React",
          style: "shadow-cyan-300",
        },
        {
          id: 5,
          icon: <FaNodeJs className="text-green-400" />,
          title: "NodeJs",
          style: "shadow-green-400",
        },
        {
          id: 6,
          icon: <SiAndroidstudio className="text-white-400" />,
          title: "Android Studio",
          style: "shadow-white",
        },
        {
          
          id: 7,
          icon: <FaGithub />,
          title: "GitHub",
          style: "shadow-gray-400",
        },
        {id: 8,
          icon: <FaSwift className="text-orange-600" />,
          title: "Swift",
          style: "shadow-orange-400",
          
        },
        {
          id: 9,
          icon: <SiTailwindcss className="text-sky-300" />,
          title: "Tailwind",
          style: "shadow-sky-400",
        },
        {
          id: 10,
          icon: <SiPandas className="text-blue-600" />,
          title: "Pandas",
          style: "shadow-blue-400",
        },
        {
      
          id: 11,
          icon: <SiOpenai />,
          title: "OpenAI API",
          style: "shadow-white",
        },
        {
          id: 12,
          icon: <SiTensorflow className="text-orange-600" />,
          title: "Tensorflow",
          style: "shadow-orange-400",
        },
        {
        id: 13,
          icon: <SiScikitlearn  className="text-white" />,
          title: "Scikitlearn",
          style: "shadow-white",
        },
        {id: 14,
          icon: <SiMongodb className="text-green-500"/>,
          title: "MongoDB",
          style: "shadow-green-500",
          
        },
        {
          id: 15,
          icon: <SiFlask  className="text-white" />,
          title: "Flask",
          style: "shadow-white",
        },
      ];
    
      return (
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
        <p className="text-4xl font-bold  p-2 inline-block text-center w-full">Technologies</p>

          <p className="py-6 text-xl text-center">These are the technologies I've worked with and used in my projects.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, icon, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <div className="flex flex-col items-center justify-center h-full">
                <div className="w-20 h-20 flex items-center justify-center text-5xl">
                  {icon}
                </div>
                <p className="mt-4 text-xl">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};
    

export default Technologies
