import TextType from "../../ReactBits/TextType/TextType";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className="w-full h-[90vh] bg-gradient-to-tr flex flex-col justify-center items-center from-[#8f61f984] via-[#f8fafc] p-25  to-[#f8fafc]">
      <h5 className="text-[#8b5cf6] mb-5">Full Stack Developer</h5>
      {/* <h1 className='text-7xl font-bold mb-2 focus-in-expand-fwd-normal'>Hi, I'm Faizal Khan</h1> */}
      <TextType
        text={["Hi, I'm Faizal Khan"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        cursorCharacter="|"
        textColors="#000"
        initialDelay={500}
        className="text-7xl font-bold mb-2  text-center"
      />
      <p className="text-zinc-700 w-[60%]">
        I build exceptional digital experiences that bring your ideas to life.
        Specializing in modern web applications with a focus on performance and
        user experience.
      </p>
      <div className="mt-8">
        <Link
          to="/projects"
          className="bg-[#8b5cf6] text-white py-2.5 px-4 rounded-md hover:bg-[#8b5cf6]/90 duration-150"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="bg-transparent border-2 border-[#8b5cf6] text-[#8b5cf6] py-2 px-4 rounded-md ml-4 hover:bg-[#8b5cf6]/5 duration-150"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

export default Hero;
