import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Img from "../images/sa-img-water-line-work.avif";
import WhyChooseUs from "../components/whyChooseUs";
import "../App.css";

const About = () => {
  const phoneNumber = "+8318403058";
  return (
    <>
      <Navbar />
      <div className=" md:bg-fixed bgImg py-36 flex flex-col justify-center px-10 md:px-28 text-white bg-neutral-900">
        <h2 className="flex justify-start py-10 text-4xl md:text-5xl ">
          About Us
        </h2>
        <p className=" md:w-2/5">
          We are a team of professional plumbers with an experience of 15+ years
          in residential and commercial plumbing
        </p>
      </div>

      <div className="flex flex-col items-center md:items-stretch md:flex-row ">
        <div className="md:w-1/2 md:mt-5 md:ml-20 border border-red">
          <img src={Img} alt="Best plumber in watsonville." className="" />
        </div>
        <div className=" md:w-1/2 mt-5 md:ml-1 text-white">
          <div className="bg-blue-500 p-12">
            <h3 className="pb-5 text-4xl ">How we started</h3>
            <p>
              Under Sergio's leadership, SA Plumbing Inc. started as a one-man
              operation, driven by his commitment to top-notch plumbing
              services. Over the years, our team and services expanded,
              maintaining a focus on quality. Today, our highly qualified team
              ensures precision in every solution and repair, embodying our
              dedication to excellence. SA Plumbing Inc. stands as a symbol of
              reliability and high standards, offering unparalleled plumbing
              solutions and repairs to elevate your experience.
            </p>
          </div>
          <div className="flex flex-col p-12">
            <h3 className="text-4xl text-neutral-800 my-5">Our Mission</h3>
            <p className="text-gray-500">
              At SA Plumbing, our mission is simple: to deliver top-notch,
              reliable plumbing services while prioritizing customer
              satisfaction. Our team comprises skilled professionals who are not
              just experts in their field but also passionate about resolving
              your plumbing concerns promptly and efficiently.
            </p>

            <h3 className="text-4xl text-gray-700 my-5">Our Core Value</h3>
            <WhyChooseUs text="Consider honesty as the key to a business’ trustworthiness and integrity." />
            <WhyChooseUs text="Always do the right thing to solve the customer’s problem." />
            <WhyChooseUs text="Perform all work with the highest level of excellence in mind." />
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row">
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
      </div> */}

      <div className="flex items-center md:items-start flex-col  mt-5 md:mr-1 p-12 bg-blue-500 text-white">
        <h3 className="pb-5 text-2xl md:text-4xl font-semibold text-center md:text-left">
          We're here to help, give us a call anytime!
        </h3>
        <div>
          <a href={`tel:${phoneNumber}`}>
            <button
              type="button"
              className="first-letter:text-white bg-transparent border-2 border-white font-medium rounded-lg text-lg px-4 py-2 text-center mr-3 hover:bg-blue-600 hover:border-blue-600"
            >
              <span className="text-xl md:text-2xl">(831) 840-3058</span>
            </button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
