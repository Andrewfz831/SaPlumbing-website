import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Fixture from "../assets/fixture.svg";
import Repair from "../assets/repair.svg";
import Shower from "../assets/shower.svg";
import IconSection from "../components/IconSection";
import ImageCarousel2 from "../components/CarouselImg2";
import BackgroundImg from "../images/sa-van-img.avif";
import ScBg from "../images/sa-testimonial-bg-img.avif";
import NumbersSpeak from "../components/NumbersSpeakSection";
import WhyChooseUse from "../components/whyChooseUs";
import OurWork from "../components/OurWork";

const Homepage = () => {
  const phoneNumber = "+8318403058";
  return (
    <>
      <Nav />

      <div
        className="font-newFont md:bg-fixed bgImg py-36 flex flex-col justify-center px-10 md:px-28 text-white bg-neutral-800"
        // className=" py-52 flex flex-col justify-center "
        // style={{
        //   backgroundImage: `url(${BackgroundImg})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        {/* <div className="flex justify-center md:justify-end"> */}
        <div className="flex justify-center">
          <div className="flex flex-col justify-center text-center items-center  ">
            {/* <div className="w-3/4 flex flex-col justify-center text-center items-center  "> */}
            <div>
              <h1 className="text-white text-5xl p-5">
                Expert Plumbing Services
              </h1>
              <h2 className="text-white flex flex-col justify-center h-fill text-4xl pb-5">
                24/7 Emergency Service
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-center mb-32 w-screen">
              <a
                href={`tel:${phoneNumber}`}
                className="inline-block relative w-auto md:w-56 mx-4 my-4 px-6 py-3 text-center text-lg font-medium tracking-wide text-white bg-blue-600 border-2 border-blue-600 rounded-lg shadow-none transition duration-500 ease-out transform  hover:shadow-inner hover:shadow-blue-500 active:scale-90"
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
      <div className="flex flex-col justify-center items-center ">
        <div className=" flex justify-around items-center  md:py-20 ">
          <div className="flex-col md:flex-row flex items-center">
            <div>
              <IconSection
                text="Repair"
                icon={Repair}
                description="
              Our expertise covers a wide range of plumbing repair services, ensuring comprehensive solutions for all your needs."
              />
            </div>
            <div>
              <IconSection
                text="Replace"
                icon={Fixture}
                description="We replace all damaged & outdated plumbing fixtures for modern efficiency."
              />
            </div>
            <div>
              <IconSection
                text="Remodel"
                icon={Shower}
                description="
             Renew your kitchen/bathroom with a stunning remodel! Transform your space into a captivating & functional masterpiece."
              />
            </div>
          </div>
        </div>
        <a href="/Services">
          <button
            type="button"
            className="inline-block relative w-auto md:w-56 mx-4 my-4 px-6 py-3 text-center text-lg font-medium tracking-wide text-white bg-blue-600 border-2 border-blue-600 rounded-lg shadow-none transition duration-500 ease-out transform  hover:shadow-inner hover:shadow-blue-500 active:scale-90"
          >
            More Services
          </button>
        </a>
      </div>
      <div className="py-20 flex justify-center items-center flex-col lg:flex-row bg-neutral-100">
        <div className=" flex flex-col justify-end items-end">
          <div className=" relative flex justify-end border ">
            <img src={BackgroundImg} alt="" className=" h-96" />

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
          <p className="text-center md:text-left py-5 text-gray-500">
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

      <div id="reviews" className="h-14 bg-neutral-100"></div>

      <div
        className="md:bg-fixed relative"
        style={{
          backgroundImage: `url(${ScBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="  md:mx-auto lg:max-w-screen-lg h-fit flex flex-col lg:flex-row justify-center items-center p-10 relative">
          <div className="flex flex-col items-center">
            <div className="text-white text-4xl md:text-5xl p-10 text-center font-semibold">
              Our Testimonials
            </div>
            <p className="text-md md:text-lg text-white text-center">
              We Believe in providing superior customer service & plumbing
              maintenance/repairs for optimal functionality
            </p>
            <Link to="https://www.yelp.com/biz/sa-plumbing-freedom?hrid=uJRLWdxNDNvzrdTIS50geg&rh_ident=Sergio&rh_type=people">
              <button
                type="button"
                className="inline-block relative w-auto md:w-56 mx-4 my-4 px-6 py-3 text-center text-lg font-medium tracking-wide text-white bg-blue-600 border-2 border-blue-600 rounded-lg shadow-none transition duration-500 ease-out transform  hover:shadow-inner hover:shadow-blue-500 active:scale-90"
              >
                More Reviews
              </button>
            </Link>
          </div>
          <ImageCarousel2 />
        </div>
      </div>

      <div className="flex flex-col items-center ">
        <h2 className="flex justify-center mt-10 text-4xl md:text-5xl text-neutral-800 font-semibold text-center">
          Numbers Speak
        </h2>
        <p className="m-10 text-center text-lg max-w-2xl text-gray-500">
          Showcasing the trust and satisfaction of our clientele. Our commitment
          to excellence resonates through the numerous satisfied customers who
          have benefited from our top-tier plumbing services.
        </p>
      </div>

      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-2xl mb-10 mt-5 flex flex-col md:flex-row items-center justify-around">
        <NumbersSpeak
          number="24/7"
          text="Emergency service, we'll be there as soon as possible "
        />

        <NumbersSpeak number="15+" text="Positive Ratings on our Yelp page" />
        <NumbersSpeak
          number="10k+"
          text="Customers are satisfied with our services"
        />
      </div>

      <h2 className="flex justify-center p-5 text-4xl md:text-5xl text-neutral-800 font-semibold border-b-2 border-blue-500 mb-10">
        Our Work
      </h2>
      <OurWork />

      <Footer />
    </>
  );
};
export default Homepage;
