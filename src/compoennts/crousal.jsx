import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import person from "../assets/person.png";
import rect from "../assets/image5.png";

export default function PurposeSection() {
  const leaders = [
    {
      img: person,
      name: "Vellayan Subbiah",
      title: "Message from the Chairman",
      desc: `With a legacy spanning more than 86 years, we stand as a significant player in the industrial machinery sector, dedicated to championing innovation and excellence. Our diverse portfolio, with Industrial Motors, Drives & Automations, Railway Products, Commercial Products, Transformers, and Switchgears, underscore our commitment to pioneering solutions that drive India's growth story forward.
At CG, we are steadfast in our dedication to Environmental, Social, and Governance (ESG) principles and we continually strive for sustainable practices and positive societal impact. Our commitment to Corporate Social Responsibility (CSR) is integral to our operations, reflecting our broader mission to contribute meaningfully to the communities we serve.

Discover more about how we are shaping a brighter future not only for India but also beyond.`,
    },
    {
      img: person,
      name: "Amar Kaul",
      title: "Message from CEO and the MD",
      desc: `With a legacy spanning more than 86 years, we stand as a significant player in the industrial machinery sector, dedicated to championing innovation and excellence. Our diverse portfolio, with Industrial Motors, Drives & Automations, Railway Products, Commercial Products, Transformers, and Switchgears, underscore our commitment to pioneering solutions that drive India's growth story forward.

At CG, we are steadfast in our dedication to Environmental, Social, and Governance (ESG) principles and we continually strive for sustainable practices and positive societal impact. Our commitment to Corporate Social Responsibility (CSR) is integral to our operations, reflecting our broader mission to contribute meaningfully to the communities we serve.

Discover more about how we are shaping a brighter future not only for India but also beyond.`,
    },
    {
      img: person,
      name: "Amar Kaul",
      title: "Message from CEO and the MD",
      desc: `With a legacy spanning more than 86 years, we stand as a significant player in the industrial machinery sector, dedicated to championing innovation and excellence. Our diverse portfolio, with Industrial Motors, Drives & Automations, Railway Products, Commercial Products, Transformers, and Switchgears, underscore our commitment to pioneering solutions that drive India's growth story forward.

At CG, we are steadfast in our dedication to Environmental, Social, and Governance (ESG) principles and we continually strive for sustainable practices and positive societal impact. Our commitment to Corporate Social Responsibility (CSR) is integral to our operations, reflecting our broader mission to contribute meaningfully to the communities we serve.

Discover more about how we are shaping a brighter future not only for India but also beyond.`,
    },
  ];

  const settings = {
    slidesToShow: 2,
    speed: 600,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },

      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },

      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },

      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },

      },
    ],
  };


  return (
    <section className="mx-auto w-full ">
      {/* Heading */}
      <div className="mx-auto w-[95%] px-4 md:px-6">
        <h2 className="inline-block border-[#005CAB] pb-1 my-[50px] text-black text-[60px] md:text-[92px] font-[700] ">
          <span className="outline-text">our</span>{" "}
          <span className="text-[#005CAB] font-bold">purpose</span>
        </h2>

        <p className="text-[32px] md:text-[48px] leading-[120%] tracking-[.5px] text-[#4C4F54]   font-[700] mb-[20px]">
          Transforming your needs into smart solutions for an enhanced quality
          of life.
        </p>
        <p className="text-[#4C4F54] mb-[100px] text-[16px] font-[400] leading-[140%] tracking-[.5px]">
          At CG, our purpose is to empower human lives with simple and
          efficient solutions every single day. Guided by our ESG objective,
          we strive to make industries more sustainable, communities more
          progressive, and enhance customer experience through smart
          engineering.
        </p>

        <h3 className="text-[32px] md:text-[48px] leading-[120%] tracking-[.5px] text-[#4C4F54] font-[700] mb-[50px]">
          Word From Our Leaders
        </h3>
      </div>
      <div className="relative pb-10">
        <div className="absolute bottom-0 w-full">
          <img
            src={rect}
            alt="blue pattern"
            className="w-full h-[400px] md:h-full object-cover"
          />
        </div>

        <div className="leaders-carousel relative z-10 max-w-7xl mx-auto md:px-6">
          <Slider {...settings}>
            {leaders.map((leader, index) => (
              <div key={index} className="px-3 flex">
                <div className="rounded-[50px] overflow-hidden flex flex-col w-full">
                  {/* Image */}
                  <div className="flex justify-center mt-6 z-20">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-[180px] h-[180px] rounded-full border-white"
                    />
                  </div>

                  {/* Content */}
                  <div className="border-[#005CAB] bg-white border-[3px] mt-[-85px] pt-24 pb-8 px-2 md:px-6 rounded-[50px] text-center flex flex-col h-full">
                    <h4 className="text-[20px] text-[#4C4F54] font-bold">
                      {leader.title}
                    </h4>
                    <p className="text-[14px] md:text-[16px] leading-[120%] tracking-[.5px] mt-3 flex-grow">
                      {leader.desc}
                    </p>
                    <p className="mt-4 font-bold text-[#005CAB] text-[20px]">
                      {leader.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}


