import { useState } from "react";
import image from "../assets/gfg.png";
import image1 from "../assets/intern.png";

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [readMoreStates, setReadMoreStates] = useState({});

  const certifications = [
    {
      id: 1,
      image: image,
      title: "DSA from GeeksforGeeks",
      shortText:
        "I completed a self-paced course on GeeksforGeeks, a well-recognized platform for coding and technical education. The course offered a deep dive into essential data structures...",
      fullText:
        "I completed a self-paced course on GeeksforGeeks, a well-recognized platform for coding and technical education. The course offered a deep dive into essential data structures, algorithms, and problem-solving skills tailored to real-world applications. With structured modules and hands-on practice, it provided a strong foundation in core programming concepts, preparing me for advanced technical challenges. I successfully earned certification upon completion, which reflects my commitment to continuous learning and technical proficiency in software development.",
    },
    {
      id: 2,
      image: image1,
      title: "Internship certificate from OpenText",
      shortText:
        "I completed a six-month internship at OpenText, gaining practical experience and developing key skills in software development. During this period, I worked on...",
      fullText:
        "I completed a six-month internship at OpenText, where I gained practical experience and developed key skills in software development. During this period, I worked on real-world projects, collaborating with professionals and learning how to solve complex technical problems effectively. My internship provided hands-on exposure to coding, debugging, and working with various tools, enhancing my understanding of the software development lifecycle. I also contributed to specific tasks, including bug fixes, testing, and implementing features, which deepened my knowledge and prepared me for future roles in the tech industry.",
    },
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const toggleReadMore = (id) => {
    setReadMoreStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section id="certificates"> {/* Add this id */}
      <h1 className="text-center pb-4 text-5xl underline font-bold">
        Certification
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center pt-4">
        {certifications.map((cert) => (
          <div key={cert.id} className="max-w-[360px] mx-auto">
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
              <div
                onClick={() => handleImageClick(cert.image)}
                className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 cursor-pointer transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {cert.title}
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                  {readMoreStates[cert.id] ? cert.fullText : cert.shortText}
                </p>
              </div>
              <div className="p-6 pt-0">
                <button
                  onClick={() => toggleReadMore(cert.id)}
                  className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                  type="button"
                >
                  {readMoreStates[cert.id] ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg max-w-3xl w-full">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
            >
              &times;
            </button>
            <img src={selectedImage} alt="Large view" className="w-full h-auto" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
