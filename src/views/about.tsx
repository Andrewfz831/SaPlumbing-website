import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Img from "../images/hydroJetting.png";
import Img2 from "../images/drainCleaning.png";
import WhyChooseUs from "../components/whyChooseUs";
import Phone from "../assets/phone-call.svg";
import Email from "../assets/mail.svg";
import "../App.css";

const About = () => {
  const phoneNumber = "+8318403058";
  return (
    <>
      <Navbar />
      <div className=" bgImg py-36 flex flex-col justify-center px-10 md:px-28 text-white bg-neutral-900">
        <h2 className="flex justify-start py-10 text-4xl md:text-5xl ">
          About Us
        </h2>
        <p className=" md:w-2/5">
          We are a team of professional plumbers with an experience of 15+ years
          in residential and commercial plumbing
        </p>
      </div>

      <div className="flex flex-col items-center md:items-stretch md:flex-row ">
        <div className="md:w-1/2 md:mt-5 md:ml-20 ">
          <img src={Img} alt="" className="h-full w-full" />
        </div>
        <div className=" md:w-1/2 mt-5 md:ml-1 p-12 bg-blue-500 text-white">
          <h3 className="pb-5 text-4xl font-semibold">How we started</h3>
          <p className=" text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            laborum necessitatibus recusandae qui quia nisi minus totam
            exercitationem corrupti, quas ratione facilis earum doloribus neque
            a animi. Minus, eos alias.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mt-5 m-10 md:ml-20">
          <h3 className="text-4xl text-neutral-800 my-5">Our Mission</h3>
          <p className="text-gray-500">
            At SA Plumbing, our mission is simple: to deliver top-notch,
            reliable plumbing services while prioritizing customer satisfaction.
            Our team comprises skilled professionals who are not just experts in
            their field but also passionate about resolving your plumbing
            concerns promptly and efficiently.
          </p>
        </div>
        <div className="md:w-1/2 mt-5 m-10 md:ml-20 ">
          <h3 className="text-4xl text-gray-700 my-5">Our Core Value</h3>
          <WhyChooseUs text="Consider honesty as the key to a business’ trustworthiness and integrity." />
          <WhyChooseUs text="Always do the right thing to solve the customer’s problem." />
          <WhyChooseUs text="Perform all work with the highest level of excellence in mind." />
        </div>
      </div>

      <div className="flex flex-col items-center md:items-stretch md:flex-row">
        <div className=" md:w-1/2 mt-5 md:mr-1 p-12 bg-blue-500 text-white">
          <h3 className="pb-5 text-4xl font-semibold">
            We're here to help, give us a call or send us an email anytime!
          </h3>
          <div>
            <a href={`tel:${phoneNumber}`} className="flex flex-row mb-5">
              <img src={Phone} alt="" className="w-10" />
              <span className="text-2xl ml-5">(831) 840-3058</span>
            </a>
          </div>
          <div>
            <a href="/Contact" className="flex flex-row">
              <img src={Email} alt="" className="w-10" />
              <span className="text-2xl ml-5">S.Aplumbing@yahoo.com</span>
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-5 md:mr-20">
          <img src={Img2} alt="" className="h-full" />
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
