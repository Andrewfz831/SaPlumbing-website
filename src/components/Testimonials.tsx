import { Link } from "react-router-dom";
import ProfilePic from "../assets/user.svg";

const Testimonials = () => {
  return (
    <section className="md:bg-fixed bgImg bg-blue-950">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="flex justify-center p-5 text-4xl md:text-5xl text-white font-semibold ">
            Testimonials
          </h2>
          <p className="mb-8 font-light lg:mb-16 sm:text-xl text-gray-300">
            Showcasing the trust and satisfaction of our clientele. Our
            commitment to excellence resonates through the numerous satisfied
            customers who have benefited from our top-tier plumbing services.
          </p>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 lg:border-r bg-gray-800 border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl  text-gray-400">
              <h3 className="text-lg font-semibold text-white">
                Polite, responsive and reasonable prizes reasonable among all of
                them.
              </h3>
              <p className="my-4">
                "We had a bunch of issues in our house that needed repair.
                Sergio, by far, has been the most polite, most responsive and
                most service cost reasonable among all of them. He did his best
                to fit us in his busy schedule and took care of our needs. He
                was very honest and thorough in his analysis and pricing. Our
                furnace needs a critical part and he is very responsive in doing
                his best to finish the job. We are so relieved to know we met
                someone who personalize our needs and understands our plight
                without tallying up the $$$$. You can never go wrong with him
                and I am in full support of small business entrepreneurs like
                him! A+++++++ customer service and service value."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src={ProfilePic}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-white text-left">
                <div>Katie B.</div>
                <div className="text-sm font-light text-gray-400">
                  Satisfied Customer
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center border-b md:p-12 bg-gray-800 border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
              <h3 className="text-lg font-semibold text-white">
                Saved the day!
              </h3>
              <p className="my-4">
                "I called on a busy Friday morning due to water heater problems.
                Sergio squeezed me in and saved the day and solved my problem.
                In this day and age when everything is a hassle, it was so nice
                to deal with someone honest, responsive and fairly priced.
                Thanks to all at SA!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src={ProfilePic}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-white text-left">
                <div>Steve R.</div>
                <div className="text-sm font-light text-gray-400">
                  satisfied Customer
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center border-b lg:border-b-0 md:p-12 lg:border-r bg-gray-800 border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
              <h3 className="text-lg font-semibold text-white">
                Fair prices and on time
              </h3>
              <p className="my-4">
                "They are professional plumbers. You can see it right away. Plus
                they're pricing is very affordable and is not outrageous like
                from other plumbers who requested much more for a small project
                we had. We are having our counters changed and we needed a
                plumber to unhook all plumbing in the kitchen: drains, pipes,
                dishwasher and a faucet. They were on time after we agreed for
                an appointment via texting (which saved so much time, because
                who wants to call?) They unhooked everything promptly and will
                come back to hook everything again after we have our new
                counters installed. We also have 3 more plumbing projects in our
                house that we will trust to SA Plumbing to do. 5 stars, Thank
                You!"
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src={ProfilePic}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-white text-left">
                <div>D G.</div>
                <div className="text-sm font-light text-gray-400">
                  Satisfied Customer
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center md:p-12 bg-gray-800 border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-400">
              <h3 className="text-lg font-semibold text-white">
                Fair competative pricing and high quality work
              </h3>
              <p className="my-4">
                "Like most individuals, I get quotes from several different
                plumbers to get a better idea of what is actually going to be
                done and compare prices as not all plumbers are the same. Some
                overcharge and do not do a good job. Sergio falls into the small
                category of those who charge fairly and do a great job.
              </p>
              <p className="my-4">
                I was inclined to write this review as I have had bad
                experiences with past plumbers so it is only right that I
                recommend Sergio."
              </p>
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-9 h-9 rounded-full"
                src={ProfilePic}
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium text-white text-left">
                <div>Daniel D.</div>
                <div className="text-sm font-light text-gray-400">
                  Satisfied Customer
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="text-center">
          <Link to="https://www.yelp.com/biz/sa-plumbing-freedom?hrid=uJRLWdxNDNvzrdTIS50geg&rh_ident=Sergio&rh_type=people">
            <button
              type="button"
              className="inline-block relative w-auto md:w-56 mx-4 my-4 px-6 py-3 text-center text-lg font-medium tracking-wide text-white bg-transparent border-2 border-white rounded-lg shadow-none transition duration-500 ease-out transform hover:text-white hover:bg-blue-800 hover:border-blue-800 hover:shadow-inner active:scale-90"
            >
              More Reviews
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
