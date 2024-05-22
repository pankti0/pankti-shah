import { HERO_CONTENT } from '../constants/index';
import profilePic from "../assets/myprofile2.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl tracking-tight lg:mt-16 lg:text-8xl">
              <span className="whitespace-nowrap"> 
                <TypeAnimation
                  sequence={[
                    "Frontend Developer", 1000,
                    "Data Analyst", 1000,
                    "Mobile App Developer", 1000,
                    "Backend Developer", 1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent">
              Hello World!
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-lighter text-center lg:text-left text-2xl">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className='flex justify-center'>
            <img 
              src={profilePic} 
              className="lg:ml-72 lg:mt-[-100px] mt-[-50px] "
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
