import { useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const ContactSection = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = "service_yotqv8i";
    const templateId = "template_c2lsr2h";
    const publicKey = "8Bt_xTUMNxrnBgBUQ";

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "SA Plumbing",
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response: EmailJSResponseStatus) => {
        alert("Email Sent!");
        console.log("Email Sent!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((err) => {
        console.error("Error Sending Email:", err);
      });
  };
  return (
    <div id="contact" className="bg-blue-500">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              placeholder="name@email.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-white">
              Your message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
              placeholder="Leave a message..."
            ></textarea>
          </div>
          <button
            type="submit"
            value="Send"
            className="inline-block relative w-auto md:w-56 my-4 px-6 py-3 text-center font-medium tracking-wide text-white bg-transparent border-2 border-white rounded-lg shadow-none transition duration-500 ease-out transform hover:text-white hover:bg-blue-800 hover:border-blue-800 hover:shadow-inner active:scale-90"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
