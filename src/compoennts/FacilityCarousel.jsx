import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import crausalImg from "../assets/crausalImg.jpg";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div
    className="absolute bottom-[-45px] md:bottom-auto md:top-1/2 right-6 md:right-50 z-20 -translate-y-1/2 cursor-pointer"
    onClick={onClick}
  >
   <img src={rightArrow} alt="" className="h-[30px] md:h-auto"/>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
  className="absolute bottom-[-45px] md:bottom-auto md:top-1/2 left-6 md:left-50 z-20 -translate-y-1/2 cursor-pointer"
  onClick={onClick}
  >
  <img src={leftArrow} alt="" className="h-[30px] md:h-auto" />
  </div>
);

const facilities = [
  {
    id: 1,
    title: "FHP Motors’ Manufacturing Facility",
    location: "Kundaim, Goa, India",
    image: crausalImg,
  },
  {
    id: 2,
    title: "Climate Action Facility",
    location: "Colvale, Goa, India",
    image: crausalImg,
  },
  {
    id: 3,
    title: "World-Class Facility",
    location: "Mumbai, India",
    image: crausalImg,
  },
];

const FacilityCarousel = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "280px",
    slidesToShow: 1,
    speed: 600,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "200px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "100px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "40px", 
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px", 
        },
      },
    ],
  };

  return (
    <div className="w-full bg-white mb-30 mt-20 relative">
      {/* Title */}
      <div className="mb-8 px-4 md:px-30">
        <h2 className="text-[32px] md:text-[48px] font-bold text-[#4C4F54]">
          World-class manufacturing facilities
        </h2>
        <p className="text-[#4C4F54] mt-2 text-normal">
          CG's high-efficiency plants are setting new industry benchmarks across the world.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative custom-carousel">
        <Slider {...settings}>
          {facilities.map((facility) => (
            <div key={facility.id} className="rounded-2xl">
              <div className="relative rounded-2xl overflow-hidden transition-all duration-500">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-[200px] md:h-[550px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#005EB1]/70 to-transparent px-4 md:px-10 py-6 text-white rounded-b-2xl">
                  <h3 className="text-[16px] md:text-[30px] font-bold">{facility.title}</h3>
                  <p className="text-[12px] md:text-[24px]">{facility.location}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FacilityCarousel;
