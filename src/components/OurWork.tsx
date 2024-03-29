import TestImg1 from "../images/sa-pic0.avif";
import TestImg2 from "../images/sa-test-img2.avif";
import TestImg3 from "../images/sa-test-img3.avif";
import WaterHeater from "../images/sa-water-heater-img.avif";
import JobImg1 from "../images/sa-job-img1.avif";
import JobImg2 from "../images/sa-job-img2.avif";
import JobImg3 from "../images/sa-job-img3.avif";
import JobImg4 from "../images/sa-shower-1.avif";
import JobImg5 from "../images/sa-img-water-line-work.avif";
import JobImg6 from "../images/sa-test-img1.avif";

const OurWork = () => {
  return (
    <div className="flex justify-center">
      <div className=" max-w-screen-xl ">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <img
              className="h-auto md:h-[600px] max-w-96 rounded-lg"
              src={JobImg1}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto md:h-[600px] max-w-96 rounded-lg"
              src={JobImg2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto md:h-[600px] max-w-96 rounded-lg"
              src={JobImg3}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto md:h-[600px] max-w-96 rounded-lg"
              src={TestImg1}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto md:h-[600px] max-w-96 rounded-lg"
              src={TestImg2}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto md:h-[600px] max-w-96 rounded-lg"
              src={TestImg3}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto md:h-[600px] max-w-96 rounded-lg"
              src={JobImg5}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto md:h-[600px] max-w-96 rounded-lg"
              src={JobImg4}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto md:h-[600px] max-w-96 rounded-lg"
              src={JobImg6}
              alt=""
            />
          </div>
          <div>
            <img
              className="h-auto md:h-[600px] max-w-96 rounded-lg"
              src={WaterHeater}
              alt=""
            />
          </div>
          {/* <div>
          <img className="h-auto max-w-full rounded-lg" src={TestImg5} alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src={TestImg6} alt="" />
        </div> */}
        </div>
      </div>
    </div>
  );
};
export default OurWork;
