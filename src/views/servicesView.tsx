import Navbar from "../components/Nav";
import Services from "../components/Services";
import DrainCleaning from "../assets/pipe1.svg";
import Fixture from "../assets/fixture.svg";
import VideoInspection from "../assets/camera.svg";
import Hydro from "../assets/gauge.svg";
import Descaling from "../assets/drain.svg";
import Smoke from "../assets/smoke-bomb-svgrepo-com.svg";
import Leak from "../assets/leak.svg";
import WaterHeater from "../assets/waterHeater.svg";
import Trenchless from "../assets/trenchless.svg";
import NewConstruction from "../assets/newConstruction.svg";
import Phone from "../assets/phone-call.svg";
import Email from "../assets/mail.svg";
import Footer from "../components/Footer";
import "../App.css";

const ServicesView = () => {
  const phoneNumber = "+8318403058";
  return (
    <>
      <Navbar />

      <div className="bgImg py-36 flex flex-col justify-center px-10 md:px-28 text-white bg-neutral-900">
        <h2 className="flex justify-start py-10 text-4xl md:text-5xl ">
          Our Services
        </h2>
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
      <div className="flex justify-center">
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
                  title="Leak Detection"
                  img={Leak}
                  description="From water leaks to gas or plumbing issues, our advanced detection methods swiftly identify and resolve all types of leaks, safeguarding your property and ensuring peace of mind."
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
                  title="Descaling"
                  img={Descaling}
                  description="Tackle pipe buildup effortlessly with our specialized treatment, restoring plumbing systems to their optimal condition."
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Smoke Testing"
                  img={Smoke}
                  description=" Pinpoint leaks and identify plumbing issues swiftly using non-invasive smoke detection methods for a comprehensive diagnosis."
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="Video Inspection"
                  img={VideoInspection}
                  description="We use high quality video inspection tools for all types of lines and for easy diagnosis."
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
              <div className="md:w-1/2 text-center">
                <Services
                  title="Trenchless Replacement"
                  img={Trenchless}
                  description="Modern solutions for seamless pipe replacement without disrupting your property. Efficient, non-invasive, and preserving the integrity of your surroundings."
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
              <div className="md:w-1/2 text-center">
                <Services
                  title="Fixture Service"
                  img={Fixture}
                  description="Revitalize your space with our professional service. From repairs to stylish replacements, we ensure top-quality fixtures for your convenience and aesthetics."
                />
              </div>
              <div className="md:w-1/2 text-center">
                <Services
                  title="New Construction"
                  img={NewConstruction}
                  description="Partner with us for impeccable plumbing solutions in your new builds. Our expertise ensures precision, reliability, and quality in every aspect of plumbing installation for your project's success."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-5 md:mr-1 p-5 bg-blue-500 text-white">
        <h3 className="pb-5 text-4xl font-semibold">
          Give us a call or send us an email to schedule!
        </h3>
        <div className="flex flex-col md:flex-row">
          <a href={`tel:${phoneNumber}`} className="flex flex-row">
            <button
              type="button"
              className="flex flex-row mb-2 text-white bg-blue-600 border-2 border-blue-600 font-medium rounded-lg text-lg px-4 py-2 h-14 text-center mr-3 hover:bg-orange-500 hover:border-orange-500"
            >
              <img src={Phone} alt="" className="w-10" />
              <span className="text-2xl ml-5">(831) 840-3058</span>
            </button>
          </a>
          <a href="/Contact" className="flex flex-row">
            <button
              type="button"
              className="flex flex-row text-white bg-blue-600 border-2 border-blue-600 font-medium rounded-lg text-lg px-4 py-2 h-14 text-center mr-3 hover:bg-orange-500 hover:border-orange-500"
            >
              <img src={Email} alt="" className="w-10" />
              <span className="text-2xl ml-5">Email Us</span>
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default ServicesView;
