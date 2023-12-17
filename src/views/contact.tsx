import Navbar from "../components/Nav";
import ContactSection from "../components/EmailForm";
import Footer from "../components/Footer";
import "../App.css";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" bgImg py-36 flex flex-col justify-center px-10 md:px-28 text-white bg-neutral-900">
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
