import Navbar from "../components/Nav";
import Services from "../components/Services";
import DrainCleaning from "../images/drain-cleaning-img.png";
import Fixture from "../images/sink-faucet-img.png";
import VideoInspection from "../images/video-inspection-img.png";
import Hydro from "../images/hydro-jetting-img.png";
import Descaling from "../images/rusty-pipes-img.png";
import Smoke from "../images/smoke-test-img.png";
import Leak from "../images/leaking-pipe-img.png";
import WaterHeater from "../images/water-heater-img.png";
import Trenchless from "../images/trenchless-img.png";
// import NewConstruction from "../assets/newConstruction.svg";
import Footer from "../components/Footer";
import Test from "../images/new-construction.png";
import "../App.css";

const ServicesView = () => {
  const phoneNumber = "+8318403058";

  return (
    <>
      <a href={`tel:${phoneNumber}`}>
        <div className="bg-blue-600 text-white flex justify-center texl-lg md:text-xl md:p-2">
          Call (831)840-3058
        </div>
      </a>
      <Navbar />

      <div className="md:bg-fixed bgImg py-36 flex flex-col justify-center px-10 md:px-28 text-white bg-neutral-800">
        <h1 className="flex justify-start py-10 text-4xl md:text-5xl ">
          Our Plumbing Services
        </h1>
        <p className=" md:w-2/5">
          We offer a wide range of plumbing services, repairs, replacements and
          remodels for residential and commercial setups.
        </p>
      </div>
      <h2
        id="services"
        className="flex justify-center p-5 text-4xl md:text-5xl text-neutral-800 font-semibold border-b-2 border-blue-500"
      >
        How can we help?
      </h2>
      <div className="flex justify-center md:bg-fixed bgImg">
        <div>
          <div className=" md:max-w-screen-lg">
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Drain Cleaning"
                  img={DrainCleaning}
                  description="Preventative maintenance and blockage clearing for toilets, sinks, main lines and storm lines."
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="Fixture Service"
                  img={Fixture}
                  description="Revitalize your space with our professional service. From repairs to stylish replacements, we ensure top-quality fixtures for your convenience and aesthetics."
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Water Heater Service "
                  img={WaterHeater}
                  description="Whether repairs or replacements, our expert team handles all water heater needs with precision, ensuring reliable performance and uninterrupted hot water supply"
                />
              </div>
              <div className="md:w-1/2 text-center ">
                <Services
                  title="Leak Detection"
                  img={Leak}
                  description="From water leaks to gas or sewage, our advanced detection methods swiftly identify and resolve all types of leaks, saving your property and ensuring peace of mind."
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Hydro Jetting"
                  img={Hydro}
                  description="A powerful solution to stubborn clogs, using high-pressure water to clear pipes and restore smooth, efficient flow"
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="New Construction"
                  img={Test}
                  description="Partner with us for impeccable plumbing solutions in your new builds. Our expertise ensures precision, reliability, and quality in every aspect of plumbing installation for your project's success."
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Descaling"
                  img={Descaling}
                  description="Tackle pipe buildup effortlessly with our specialized treatment, restoring plumbing systems to their optimal condition."
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="Smoke Testing"
                  img={Smoke}
                  description=" Pinpoint leaks and identify plumbing issues swiftly using non-invasive smoke detection methods for a comprehensive diagnosis."
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Video Inspection"
                  img={VideoInspection}
                  description="We use high quality video inspection tools for all types of lines and for easy diagnosis."
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="Trenchless Replacement"
                  img={Trenchless}
                  description="Modern solutions for seamless pipe replacement without disrupting your property. Efficient, non-invasive, and preserving the integrity of your surroundings."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center md:items-start flex-col  mt-5 md:mr-1 p-12 bg-blue-500 text-white">
        <h3 className="pb-5 text-2xl md:text-4xl font-semibold text-center md:text-left">
          We're here to help, give us a call anytime!
        </h3>
        <div>
          <a href={`tel:${phoneNumber}`}>
            <button
              type="button"
              className="inline-block relative w-auto md:w-56 mx-4 my-4 px-6 py-3 text-center text-lg font-medium tracking-wide text-white bg-transparent border-2 border-white rounded-lg shadow-none transition duration-500 ease-out transform hover:text-white hover:bg-blue-800 hover:border-blue-800 hover:shadow-inner active:scale-90"
            >
              <span className="text-xl">(831) 840-3058</span>
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ServicesView;
