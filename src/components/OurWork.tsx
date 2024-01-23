import TestImg1 from "../images/sa-pic0.jpg";
import TestImg2 from "../images/sa-test-img2.png";
import TestImg3 from "../images/sa-test-img3.png";
import TestImg5 from "../images/sa-test-img5.png";
import TestImg6 from "../images/sa-test-img6.png";

const OurWork = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <img className="h-auto max-w-full rounded-lg" src={TestImg1} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={TestImg2} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={TestImg3} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={TestImg5} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={TestImg6} alt="" />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default OurWork;
