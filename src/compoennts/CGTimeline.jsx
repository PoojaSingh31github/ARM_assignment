import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

import blueWave from "../assets/blue_wave.png";
import yellowWave from "../assets/yellow_wave.png";
import slider from "../assets/CGTtimelineSlderImg.png";
import slider2 from "../assets/CGTtimelineslider2.png";
// import line from "../assets/line.png";

const slides = [
  {
    year: "1878",
    title: "Our Beginning in England",
    desc: "Founded as REB Crompton & Co., setting the foundation for a pioneering legacy in electrical engineering.",
    img: slider,
  },
  {
    year: "1900",
    title: "Establishing Presence in India",
    desc: "Marked entry into the Indian market with innovations in power solutions.",
    img: slider2,
  },
  {
    year: "1937",
    title: "Diversification & Global Collaborations",
    desc: "Expanded product portfolio and global collaborations.",
    img: slider,
  },
  {
    year: "1962",
    title: "Railway Solutions Debut",
    desc: "Pioneered solutions for Indian Railways with reliable products.",
    img: slider2,
  },
  {
    year: "1993",
    title: "Two Strong Pillars",
    desc: "Established B2B & Consumer divisions as strategic pillars.",
    img: slider2,
  },
  {
    year: "2005",
    title: "Global Footprint Expansion",
    desc: "Expanded to global markets with strong product lines.",
    img: slider2,
  },
];

const CGTimeline = () => {
  const [index, setIndex] = useState(0);

  const imgRef = useRef(null);
  const textRef = useRef(null);
  const circleRefs = useRef([]);

  useEffect(() => {
    // Image fade/slide animation
    gsap.fromTo(
      imgRef.current,
      { autoAlpha: 0, x: -50 },
      { autoAlpha: 1, x: 0, duration: 0.6, ease: "power3.out" }
    );

    // Text fade/slide animation
    gsap.fromTo(
      textRef.current,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );

    // Circles animation
    circleRefs.current.forEach((circle, i) => {
      if (i === index) {
        gsap.to(circle, {
          scale: 1.2,
          duration: 0.4,
          backgroundColor: "#2563eb", // blue-600
          boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
        });
      } else {
        gsap.to(circle, {
          scale: 1,
          duration: 0.4,
          backgroundColor: "#93c5fd", // blue-300
          boxShadow: "0px 2px 6px rgba(0,0,0,0.2)",
        });
      }
    });
  }, [index]);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 relative">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-[28px] md:text-[48px] font-bold text-[#4C4F54] text-left">
          CG Through the Years
        </h2>
        <p className="text-[#4C4F54] mt-2 text-base md:text-lg text-left">
          From a pioneering start in 1878 to becoming a global name in electrical solutions,
          CG's journey is one of innovation, expansion, and transformation.
        </p>
      </div>

      {/* ====== Desktop / Laptop Layout ====== */}
      <div className="hidden md:flex items-start gap-8 mb-16 relative">
        {/* Image */}
        <div className="flex-shrink-0 w-80 h-80 rounded-xl overflow-hidden shadow-lg">
          <img
            ref={imgRef}
            src={slides[index].img}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 mt-6" ref={textRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {slides[index].title}
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            {slides[index].desc}
          </p>
        </div>

        {/* Arrows */}
        <div className="flex flex-col justify-center items-center gap-6">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className={`w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border ${
              index === 0 ? "opacity-40 cursor-not-allowed" : "hover:shadow-lg"
            }`}
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={index === slides.length - 1}
            className={`w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border ${
              index === slides.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:shadow-lg"
            }`}
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ====== Mobile Layout ====== */}
      <div className="flex flex-col items-center gap-6 md:hidden">
        {/* Image */}
        <div className="w-full max-w-xs rounded-xl overflow-hidden shadow-lg">
          <img
            ref={imgRef}
            src={slides[index].img}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center" ref={textRef}>
          <h2 className="text-xl font-bold text-gray-800 mb-2">{slides[index].title}</h2>
          <p className="text-gray-600 text-sm">{slides[index].desc}</p>
        </div>

        {/* Arrows */}
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className={`w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border ${
              index === 0 ? "opacity-40 cursor-not-allowed" : "hover:shadow-lg"
            }`}
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={index === slides.length - 1}
            className={`w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center border ${
              index === slides.length - 1 ? "opacity-40 cursor-not-allowed" : "hover:shadow-lg"
            }`}
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* ====== Timeline ====== */}
      {/* Desktop Horizontal */}
      <div className="relative mt-16">
        {/* Static Waves */}
        <img src={blueWave} alt="blue wave" className="absolute inset-0 w-full h-24 object-cover" />
        <img src={yellowWave} alt="yellow wave" className="absolute inset-0 w-full h-24 object-cover opacity-80" />

        {/* Circles */}
        <div className="relative z-10 flex justify-between items-center px-6 py-10">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {i === index && (
                <div className="absolute -inset-3 border-2 border-dashed border-blue-500 rounded-full animate-pulse"></div>
              )}
              <div
                ref={(el) => (circleRefs.current[i] = el)}
                className="w-16 h-16 flex items-center justify-center rounded-full shadow-md text-white font-semibold"
              >
                {slide.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Vertical */}
      {/* <div className="relative mt-10 flex flex-col items-center md:hidden">
        <div className="flex flex-col gap-6">
          {slides.map((slide, i) => (
            <div key={i} className="relative flex flex-col items-center">
              {i === index && (
                <div className="absolute -inset-2 border-2 border-dashed border-blue-500 rounded-full animate-pulse"></div>
              )}
              <div
                ref={(el) => (circleRefs.current[i] = el)}
                className="w-14 h-14 flex items-center justify-center rounded-full shadow-md text-white font-semibold"
              >
                {slide.year}
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default CGTimeline;
