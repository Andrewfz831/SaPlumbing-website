import Carousel from "./Carousel";
import img1 from "../images/saReview5.avif";
import img2 from "../images/saReview6.avif";
import img3 from "../images/saReview4.avif";

export default function ImageCarousel2() {
  const slides = [img3, img2, img1];

  return (
    <div className="relative z-0 flex justify-center">
      <div className=" max-w-3xl md:max-w-xl lg:max-w-6xl">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}
