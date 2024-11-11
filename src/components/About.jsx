import { useState } from "react";
import bannerImage from "../assets/image.png";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const data = {
    image: bannerImage,
    title: "Java Developer & React JS Developer",
    desc1: `I am a passionate developer with hands-on experience in both frontend and backend technologies. I completed my internship at Opentext, where I gained valuable insights into real-world projects and honed my skills in software development. Currently, I am undergoing comprehensive training in Java Full Stack development from Pankaj Sir Academy, which is enhancing my expertise in building dynamic and scalable web applications. I am excited to apply my knowledge in Java, Spring Boot, and modern web technologies to solve complex problems and create efficient solutions. I am always eager to learn new technologies and grow as a software developer.`,
    actionButton: {
      title: "Read More..",
      link: "/readmore",
    },
  };

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about">
      {/* Make sure this id matches the link in the header */}
      <div className="main-container bg-gray-100 border py-16 sm:px-8 md:px-16 sm:py-24">
        <h1 className="text-center pb-16 text-5xl underline font-bold">
          About Me
        </h1>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Image container */}
          <div className="w-full flex justify-center rounded-full">
            <img
              className="w-32 sm:w-48 md:w-64 lg:w-80 object-cover rounded-full"
              src={data.image}
              alt="Amit Thakur"
            />
          </div>

          {/* Text container */}
          <div className="w-full flex justify-center">
            <div className="space-y-5 w-full sm:w-2/3">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center sm:text-left">
                {data.title}
              </h1>
              <p className="text-sm sm:text-base">
                {isExpanded
                  ? data.desc1
                  : `${data.desc1.split(" ").slice(0, 30).join(" ")}...`}
              </p>
              <div className="text-center sm:text-left">
                <button
                  onClick={handleReadMore}
                  className="bg-orange-500 px-6 py-3 text-xl sm:text-2xl rounded-full shadow-lg"
                >
                  {isExpanded ? "Show Less" : data.actionButton.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
