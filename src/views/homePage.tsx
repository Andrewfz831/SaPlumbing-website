import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Fixture from "../assets/fixture.svg";
import Repair from "../assets/repair.svg";
import Shower from "../assets/shower.svg";
import IconSection from "../components/IconSection";
import WaterHeater from "../assets/waterHeater.svg";
import Pipe from "../assets/pipe1.svg";
import BackgroundImg from "../images/bgimg.avif";
import VanImg from "../images/sa-van-img.avif";
import Phone24Hour from "../assets/24-hours.svg";
import WhyChooseUse from "../components/whyChooseUs";
import OurWork from "../components/OurWork";
import Testimonials from "../components/Testimonials";

const Homepage = () => {
  const phoneNumber = "+8318403058";
  return (
    <div>
      <a href={`tel:${phoneNumber}`}>
        <div className="bg-blue-600 text-white flex justify-center texl-lg md:text-xl md:p-2">
          Call (831)840-3058
        </div>
      </a>
      <Nav />

      <div
        className="h-screen flex flex-col justify-center items-start relative lg:bg-fixed font-semibold"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-950 opacity-50"></div>

        <div className="flex justify-center relative">
          <div className="flex flex-col justify-center items-center  ">
            <div>
              <h1 className="text-white text-4xl md:text-6xl p-5">
                Expert Plumbing Services
              </h1>
              <h2 className="text-white text-2xl md:text-4xl p-5">
                Santa Cruz | Watsonville | Surrounding Areas
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center mb-32 w-screen">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block relative w-auto md:w-56 mx-4 my-4 px-6 py-3 text-center text-lg font-medium tracking-wide text-white bg-blue-600 border-2 border-blue-600 rounded-lg shadow-none transition duration-500 ease-out transform  hover:shadow-inner hover:shadow-blue-500 hover:bg-blue-700 active:scale-90"
              >
                <button type="button">Call to Schedule</button>
              </a>
              <Link
                to="/Contact"
                className="inline-block relative w-auto md:w-56 mx-4 my-4 px-6 py-3 text-center text-lg font-medium tracking-wide text-white bg-transparent border-2 border-white rounded-lg shadow-none transition duration-500 ease-out transform hover:text-white hover:bg-blue-600 hover:border-blue-600 hover:shadow-inner active:scale-90"
              >
                <button type="button">Email Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h2
        id="services"
        className="flex justify-center p-5 text-4xl md:text-5xl text-neutral-800 font-semibold border-b-2 border-blue-500"
      >
        Our Services
      </h2>
      <div className="flex items-center justify-center py-10">
        <div className="max-w-screen-xl">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <IconSection
                text="24/7 Emergency Service"
                icon={Phone24Hour}
                description="Plumbing issues can happen at any time, but rest assured, we are here for you 24/7 to resolve any unexpected challenges."
              />
            </div>
            <div className="md:w-1/2">
              <IconSection
                text="Repair"
                icon={Repair}
                description="
              Our expertise covers a wide range of plumbing repair services, ensuring the best solutions for all your needs."
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <IconSection
                text="Replace"
                icon={Fixture}
                description="We replace all damaged & outdated plumbing fixtures for modern efficiency."
              />
            </div>
            <div className="md:w-1/2">
              <IconSection
                text="Remodel"
                icon={Shower}
                description="
             Renew your kitchen/bathroom with a stunning remodel! Transform your space into a captivating & functional masterpiece."
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <IconSection
                text="Water Heaters"
                icon={WaterHeater}
                description="Whether repairs or replacements, our expert team handles all water heater needs with precision, ensuring reliable performance and uninterrupted hot water supply."
              />
            </div>
            <div className="md:w-1/2">
              <IconSection
                text="Drain Cleaning"
                icon={Pipe}
                description="
                Preventative maintenance and blockage clearing for toilets, sinks, main lines and storm lines."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center border bg-blue-600">
        <a href="/Services">
          <button
            type="button"
            className="inline-block relative w-auto md:w-56 mx-4 my-4 px-6 py-3 text-center text-lg font-medium tracking-wide text-white bg-transparent border-2 border-white rounded-lg shadow-none transition duration-500 ease-out transform hover:text-white hover:bg-blue-800 hover:border-blue-800 hover:shadow-inner active:scale-90"
          >
            More Services
          </button>
        </a>
      </div>
      <div className="py-20 flex justify-center items-center flex-col lg:flex-row">
        <div className=" flex flex-col justify-end items-end">
          <div className=" relative flex justify-end border ">
            <img src={VanImg} alt="" className=" h-96" />

            <div className="flex flex-col items-center justify-center w-52 h-40 bg-orange-500 absolute bottom-64">
              <span className="text-white text-5xl font-semibold">15+</span>
              <span className="text-white text-lg pt-5">
                Years of Experience
              </span>
            </div>
          </div>
        </div>
        <div className=" text-neutral-800 flex flex-col items-center md:items-start px-10 py-5">
          <div className=" text-xl font-medium pb-5">Why Choose Us?</div>
          <div className=" text-5xl font-semibold">
            Focused on getting the job done!
          </div>
          <p className="text-center md:text-left py-5 text-gray-600">
            Efficient solutions for all your plumbing needs. We tackle every
            task with expertise and dedication.
          </p>
          <div>
            <WhyChooseUse text="Unmatched performance, satisfaction service guarantees" />
            <WhyChooseUse text="Fully lisenced LIC# 1035812" />
            <WhyChooseUse text="Home protection through our shoe covers and mats" />
            <WhyChooseUse text="24 / 7 availability for all emergency services" />
            <WhyChooseUse text="Clear communication and updates on service arrival" />
            <WhyChooseUse text="Free estimates" />
            <WhyChooseUse text="Habla Espańol" />
          </div>
        </div>
      </div>

      <Testimonials />

      <h2 className="flex justify-center p-5 text-4xl md:text-5xl text-neutral-800 font-semibold border-b-2 border-blue-500 mb-10">
        Our Work
      </h2>
      <OurWork />

      <Footer />
    </div>
  );
};
export default Homepage;
