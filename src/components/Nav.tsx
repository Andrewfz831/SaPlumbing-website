import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import Logo from "../images/SA_Logo_2-removebg-preview.webp";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="shadow-md w-full border-b-2 border-neutral-700">
      <div className="md:flex justify-between bg-neutral-800 py-6 md:px-10 px-7">
        <div className="font-bold cursor-pointer">
          <div className="flex flex-col items-center">
            <img src={Logo} alt="" className="h-20" />
            <h1 className="text-white font-normal text-3xl pl-2">
              SA Plumbing Inc.
            </h1>
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
          } md:flex md:items-center font-medium bg-neutral-800 bg-opacity-95 flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0`}
        >
          <li className="md:ml-8  md:my-0 my-7">
            <Link
              to="/"
              className={`block py-2 pl-3 pr-4 rounded ${
                location.pathname === "/"
                  ? "text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:border-b-2 md:border-blue-500 md:p-0 md:rounded-none duration-100"
                  : "text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:text-blue-500 duration-100"
              }`}
            >
              Home
            </Link>
          </li>
          <li className="md:ml-8  md:my-0 my-7">
            <Link
              to="/About-SAPlumbing"
              className={`block py-2 pl-3 pr-4 rounded ${
                location.pathname === "/About-SAPlumbing"
                  ? "text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:border-b-2 md:border-blue-500 md:p-0 md:rounded-none duration-100"
                  : "text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:text-blue-500 duration-100"
              }`}
            >
              About
            </Link>
          </li>
          <li className="md:ml-8  md:my-0 my-7">
            <Link
              to="/Services"
              className={`block py-2 pl-3 pr-4 rounded ${
                location.pathname === "/Services"
                  ? "text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:border-b-2 md:border-blue-500 md:p-0 md:rounded-none duration-100"
                  : "text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:text-blue-500 duration-100"
              }`}
            >
              Services
            </Link>
          </li>
          <li className="md:ml-8  md:my-0 my-7">
            <Link
              to="/Contact"
              className={`block py-2 pl-3 pr-4 rounded ${
                location.pathname === "/Contact"
                  ? "text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:border-b-2 md:border-blue-500 md:p-0 md:rounded-none duration-100"
                  : "text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:text-blue-500 duration-100"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
