import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const onDarkModeToggle = () => {
    setIsDark(!isDark);
    // document.body.classList.toggle("dark");
  };
  return (
    <div className="w-full h-[10vh]  py-4 bg-[#f8fafc] text-[#0f172a] sticky top-0 z-40 shadow flex justify-between items-center px-7">
     <h1 className="text-xl font-semibold text-[#8b5cf6]">faizal.dev</h1>
        
      <div className="flex gap-6 items-center text-md">
        <Link
          className="navlink relative font-medium hover:text-[#8b5cf6] duration-150 "
          to="/"
        >
          Home
        </Link>
        <Link
          className="navlink relative font-medium hover:text-[#8b5cf6] duration-150 "
          to="/about"
        >
          About
        </Link>
        <Link
          className="navlink relative font-medium hover:text-[#8b5cf6] duration-150 "
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="navlink relative font-medium hover:text-[#8b5cf6] duration-150 "
          to="/blog"
        >
          Blog
        </Link>
        <Link
          className="navlink relative font-medium hover:text-[#8b5cf6] duration-150 "
          to="/contact"
        >
          Contact
        </Link>
        {isDark ? (
          <i onClick={() => setIsDark(!isDark)} className="ri-moon-line"></i>
        ) : (
          <i
            onClick={onDarkModeToggle}
            className="ri-sun-line hover:rotate-45 duration-150"
          ></i>
        )}
      </div>
    </div>
  );
}

export default Navbar;
