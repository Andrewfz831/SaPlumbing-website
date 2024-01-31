import Navbar from "../components/Nav";
import ContactSection from "../components/EmailForm";
import Footer from "../components/Footer";
import "../App.css";

const Contact = () => {
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
        <h2 className="flex justify-start py-10 text-4xl md:text-5xl ">
          Contact Us
        </h2>
        <p className=" md:w-2/5">
          Got any issues? Want to send feedback? Need details about our
          Business? Let us know.
        </p>
      </div>
      <ContactSection />
      <Footer />
    </>
  );
};
export default Contact;
