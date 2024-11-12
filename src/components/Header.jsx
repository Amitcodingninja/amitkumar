import { useState } from "react";
import icon from "../assets/3.ico";  // Import the icon directly

const Header = () => {
  const [menuLinks, setMenuLinks] = useState([
    { title: "Home", link: "#banner", id: 1 },
    { title: "About", link: "#about", id: 2 },
    { title: "Expertise", link: "#expertise", id: 3 },
    { title: "Services", link: "#services", id: 4 },
    { title: "Project", link: "#projects", id: 5 }, // Added Project link
    { title: "Certificate", link: "#certificates", id: 6 }, // Update the link here
    { title: "Contact", link: "mailto:amit.kumar0010110@gmail.com", id: 7 }, // Changed link to mailto
  ]);

  const [action, setActionButton] = useState({
    title: "CV",
    link: "/assets/Amit_Kumar_CV.pdf",
  });

  return (
    <section>
      {/* Updated the class for sticky header */}
      <div className="sticky top-0 z-50 h-20 border main flex justify-between items-center px-16 bg-gray-100 shadow-lg">
        <div>
          {/* Changed brand name to image icon */}
          <a href="/" className="flex items-center">
            <img
              src={icon}  // Use the imported icon variable
              alt="Brand Logo"
              className="w-16 h-16 rounded-full"  // Adjust the size as per your need
            />
          </a>
        </div>
        <div className="space-x-6">
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>
        <div>
          <a
            href={action.link}
            download
            className="flex items-center px-3 py-2 bg-orange-500 rounded-full text-2xl text-white"
          >
            <i className="fa-solid fa-download"></i> {action.title}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Header;
