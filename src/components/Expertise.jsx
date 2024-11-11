import bannerBackground from "../assets/banner_wallpaper.svg";

const Expertise = () => {
  return (
    <>
      <section id="expertise">
        <div className="mt-2">
          <h1 className=" mb-16 text-5xl font-bold underline  text-center">
            My Expertise
          </h1>
          {/* box section */}
          <div
            style={{
              backgroundImage: `url(${bannerBackground})`,
              backgroundSize: "cover",
            }}
            className="box-container items-center flex py-16"
          >
            <div className="flex text-white justify-center">
              {/* text container */}
              <div className="w-2/3 text-center space-y-4">
                <h1 className="text-4xl font-bold ">
                  I love these technologies
                </h1>
                <p>
                  I specialize in Core Java, J2EE, and Hibernate for building
                  robust backend systems. Proficient in Spring Framework, Spring
                  Boot, and Spring Security for secure web applications.
                  Experienced in front-end technologies like JavaScript,
                  ReactJS, Angular, NextJS, and Tailwind CSS, alongside state
                  management. Expertise in AWS Cloud and EC2 deployment.
                </p>
                <a
                  className="px-3 py-0 bg-orange-500 text-2xl rounded-full shadow-lg "
                  href="mailto:amit.kumar0010110@gmail.com" //  email Service
                >
                  Hire Me
                </a>
              </div>
            </div>
            <div className="flex justify-center">
              {/* skills container */}
              <div className="flex justify-center w-2/3 h-fit space-x-3  flex-wrap">
                <p className="bg-gray-300 w-fit px-3 py-2 mt-1 rounded-full hover:bg-orange-500 cursor-pointer">
                  Core Java
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  J2EE
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  Hibernate(ORM Tool)
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  Spring Framework
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  Spring Boot Framework
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  Spring Security
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  Javascript
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  ReactJS
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  Tailwind CSS
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  Angular
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  NextJS
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  State Management
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  AWS Cloud
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  EC2
                </p>
                <p className="bg-gray-300 w-fit px-3 py-2 mt-2 rounded-full hover:bg-orange-500 cursor-pointer">
                  Deploying on Cloud
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expertise;
