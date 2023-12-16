import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import Logo from "../images/SA_Logo_2-removebg-preview.png";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768); // Adjust this value as per your breakpoint for mobile screens
  };

  useEffect(() => {
    handleResize(); // Set initial state based on screen size
    window.addEventListener("resize", handleResize); // Listen for window resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener
    };
  }, []);

  return (
    <div className="shadow-md w-full border-b-2 border-neutral-700">
      <div className="md:flex justify-between bg-neutral-900 py-6 md:px-10 px-7">
        <div className="font-bold cursor-pointer">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="" className="h-20" />
            <div className="text-white font-normal text-3xl pl-2">
              SA Plumbing Inc.
            </div>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="flex flex-row text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <VscClose className="text-white" />
          ) : (
            <RxHamburgerMenu className="text-white" />
          )}
        </div>
        <ul
          className={`${
            !isMobile || open ? "visible-menu" : "hidden"
          } font-medium bg-neutral-900 bg-opacity-95 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}
        >
          <li className="md:ml-8  md:my-0 my-7">
            <RouterLink
              to="/"
              className="block py-2 pl-3 pr-4 rounded text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:border-b-2 md:hover:border-blue-500 md:p-0 md:hover:rounded-none duration-100"
            >
              Home
            </RouterLink>
          </li>
          <li className="md:ml-8  md:my-0 my-7">
            <RouterLink
              to="/About-SAPlumbing"
              className="block py-2 pl-3 pr-4 rounded text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:border-b-2 md:hover:border-blue-500 md:p-0 md:hover:rounded-none duration-100"
            >
              About
            </RouterLink>
          </li>
          <li className="md:ml-8  md:my-0 my-7">
            <RouterLink
              to="/Services"
              className="block py-2 pl-3 pr-4 rounded text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:border-b-2 md:hover:border-blue-500 md:p-0 md:hover:rounded-none duration-100"
            >
              Services
            </RouterLink>
          </li>
          <li className="md:ml-8  md:my-0 my-7">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="block py-2 pl-3 pr-4 rounded text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:border-b-2 md:hover:border-blue-500 md:p-0 md:hover:rounded-none duration-100"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
