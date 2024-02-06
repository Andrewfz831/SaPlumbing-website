import { Link } from "react-router-dom";
import Logo from "../images/SA_Logo_2-removebg-preview.webp";
import BusinessInfo from "./BisinessInfo";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYelp } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-neutral-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className=" w-32" alt="SA Plumbing Logo" />
          </Link>
          <div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
              <li>
                <Link
                  to="/About-SAPlumbing"
                  className="hover:underline me-4 md:me-6"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/Services" className="hover:underline me-4 md:me-6">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:underline me-4 md:me-6">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex mt-4 sm:justify-center text-lg sm:mt-0 p-5">
              <a
                href="https://www.instagram.com/saplumbinginc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <FaInstagram />

                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaFacebookF />

                <span className="sr-only">Facebook</span>
              </a>

              <a
                href="https://www.yelp.com/biz/sa-plumbing-freedom"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaYelp />
                <span className="sr-only">Yelp</span>
              </a>
            </div>
          </div>
        </div>

        <BusinessInfo />

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          © 2024 SA Plumbing Inc. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
