import bannerImage from "../assets/3.jpeg";
import bannerBackground from "../assets/banner_wallpaper.svg";
import Typed from "typed.js";
import { useRef, useEffect } from "react";

const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Java Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Spring Boot Developer",
      ],
      startDelay: 100,
      typeSpeed: 50,
      backSpeed: 10,
      backDelay: 100,
      loop: true,
    });

    // Cleanup typed.js on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bannerBackground})`,
        backgroundSize: "cover",
      }}
      className="grid gap-8 sm:max-xl:bg-blue-50 sm:max-xl:p-9 md:grid-cols-2 md:items-center md:text-left py-16 px-4 sm:px-16 sm:py-32"
    >
      {/* First dabba */}
      <div className="w-full flex items-center justify-center text-white">
        {/* Text section */}
        <div className="w-full sm:w-2/3 space-y-4 ms-10 text-center sm:text-left">
          <h3 className="text-3xl font-semibold">Hi, I am</h3>
          <h1 className="text-4xl sm:text-5xl font-bold">Amit Thakur</h1>
          <h2 className="text-xl sm:text-3xl">
            I am <span className="font-bold underline" ref={el}></span>
          </h2>
          <p className="text-sm sm:text-base">
          Frontend, Backend, and Spring Boot Developer building innovative web solutions.
          </p>

          <div className="icons-container flex justify-center sm:justify-start space-x-5 mt-6">
            <a
              href="https://www.geeksforgeeks.org/user/akumar420india/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-orange-600 border cursor-pointer px-4 py-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              
              <i className="fa-solid fa-code text-3xl sm:text-4xl "></i>
            </a>

            <a
              href="https://leetcode.com/u/codeguru0010110/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-orange-600 border cursor-pointer px-4 py-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fa-brands text-3xl sm:text-4xl fa-stack-overflow"></i>
            </a>

            <a
              href="https://github.com/Amitcodingninja"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-orange-600 border cursor-pointer px-4 py-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center bg-gray-800"
            >
              <i className="fa-brands text-3xl sm:text-4xl fa-github"></i>
            </a>

            {/* Other social icons */}

            <a 
            href="https://instagram.com/thakuramit06"
            target="_blank"
            rel="noopener noreferrer"
            
            className="hover:bg-orange-600 border cursor-pointer px-4 py-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-3xl sm:text-4xl fa-instagram"></i>
            </a>



            <a 
             href="https://www.linkedin.com/in/amit-kumar0006/"
             target="_blank"
             rel="noopener noreferrer"
            className="hover:bg-orange-600 border cursor-pointer px-4 py-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex justify-center items-center bg-gray-800">
              <i className="fa-brands text-3xl sm:text-4xl fa-linkedin-in"></i>
            </a>
          </div>

          <br />
          <a
            className="text-2xl px-4 py-2 bg-orange-500 rounded-full shadow-lg"
            href="mailto:amit.kumar0010110@gmail.com"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Second dabba */}
      <div className="w-full flex justify-center mt-10 sm:mt-0">
        {/* Image section */}
        <img
          className="w-32 sm:w-48 md:w-64 lg:w-80 object-cover rounded-full"
          src={bannerImage}
          alt="Amit Thakur"
        />
      </div>
    </div>
  );
};

export default Banner;
