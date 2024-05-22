import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="text-4xl font-bold  p-2 inline-block text-center w-full">
            About Me
        </h1>
        <div className="flex flex-wrap">
            <div className="flex justify-center lg:justify-start text-xl text-center">
                <p>{ABOUT_TEXT}</p>
            </div>
        </div>
    </div>
  );
}

export default About;
