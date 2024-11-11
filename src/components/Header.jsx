import { useState } from "react";
const Header = () => {
  const [brandName, setBrandName] = useState("Amit Thakur");
  const [menuLinks, setMenuLinks] = useState([
    {
      title: "Home",
      link: "/home",
      id: 1,
    },
    {
      title: "Skills",
      link: "/skills",
      id: 3,
    },
    {
      title: "About",
      link: "/about",
      id: 2,
    },
    {
      title: "Portfolio",
      link: "/portfolio",
      id: 4,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 5,
    },
  ]);
  const [action, setActionButton] = useState({
    title: "Hire Me",
    link: "/hire-me",
  });
  return (
    <>
      <div className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
        <div>
          {/* Brand Logo */}
          <h1 className="text-2xl font-bold">{brandName}</h1>
        </div>
        <div className="space-x-6">
          {/* Menu Links */}
          {menuLinks.map((link) => (
            <a key={link.id} href={link.link} className="hover:text-orange-600">
              {link.title}
            </a>
          ))}
        </div>
        <div>
          {/* Button */}
          <a
            href={"actionButton.link"}
            className="px-3 py-2 bg-orange-500 rounded-full text-2xl"
          >
            {action.title}
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
