import React from "react";
import BannerImg from "../assets/image.png"; // Adjust the path as necessary
import logo from "../assets/Logo.png"; // Adjust the path as necessary
import rectangle from "../assets/Rectangle.png"; // Adjust the path as necessary
import menu from "../assets/Menu.png"; // Adjust the path as necessary
import search from "../assets/Icon.png"; // Adjust the path as necessary
import icon_button from "../assets/Icon_Button.png"; // Adjust the path as necessary

export default function Banner() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-900 relative">
      {/* Navbar */}

      {/* Hero Image */}
      <img src={BannerImg} alt="Industry" className="w-full h-[300px] object-cover mt-16 md:mt-0" />

      <nav className=" mx-auto fixed top-0 left-0 z-50 md:mt-[20px] w-full ">
        <div className="mx-auto shadow_navbar flex items-center justify-between px-4 py-3 w-full md:w-[90%] h-[66px] bg-white md:rounded-[60px]">
          <img src={logo} alt="" />
          <ul className="hidden md:flex space-x-6 text-[16px] leading-[100%] tracking-[0%] font-[400] text-[#4C4F54] hover:text-[#005CAB]">
            <li className="h-[66px] px-2 
        flex justify-center items-center
        border-b-4 border-transparent
        text-[#4C4F54]
        transition-all duration-300 ease-in-out
        hover:text-[#005CAB] hover:border-[#005CAB] hover:font-bold">About CG</li>
            <li className="h-[66px] px-2 
        flex justify-center items-center
        border-b-4 border-transparent
        text-[#4C4F54]
        transition-all duration-300 ease-in-out
        hover:text-[#005CAB] hover:border-[#005CAB] hover:font-bold">Business Solutions</li>
            <li className="h-[66px] px-2 
        flex justify-center items-center
        border-b-4 border-transparent
        text-[#4C4F54]
        transition-all duration-300 ease-in-out
        hover:text-[#005CAB] hover:border-[#005CAB] hover:font-bold">Consumer Durables</li>
            <li className="h-[66px] px-2 
        flex justify-center items-center
        border-b-4 border-transparent
        text-[#4C4F54]
        transition-all duration-300 ease-in-out
        hover:text-[#005CAB] hover:border-[#005CAB] hover:font-bold">Investors</li>
            <li className="h-[66px] px-2 
        flex justify-center items-center
        border-b-4 border-transparent
        text-[#4C4F54]
        transition-all duration-300 ease-in-out
        hover:text-[#005CAB] hover:border-[#005CAB] hover:font-bold">Careers</li>
          </ul>
          <div className="flex gap-3">
            <div className="hidden lg:flex w-[40px] h-[40px] rounded-full bg-[#efefef] justify-center items-center">
              <img src={search} alt="" />
            </div>
            <button className="hidden md:flex px-4 py-2 bg-[#005CAB] text-white rounded-[25px]  text-[14px] font-[800] ">
              Contact Us
            </button>
            <img src={menu} alt="" className="flex md:hidden" />
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="w-[95%] mx-auto ">
        <div className=" mx-auto px-4 py-4 mt-[50px] text-[14px] leading-[100%] text-[#969696]">
          Home | About CG |{" "}
          <span className="text-[#4C4F54] ">Company Overview</span>
        </div>

        {/* Main Content */}
        <div className=" mx-auto px-4 md:px-6 ">
          <h2 className="text-[60px] md:text-[92px] leading-[100%] text-[#4C4F54] tracking-[.5px] font-[400] md:w-[89%] lg:w-[80%] my-[50px] mb-[100px]">
            88+ Years of{" "}
            <span className="text-[#005CAB] font-bold">Innovation</span> and{" "}
            <span className="text-[#005CAB] font-bold">Impact</span>
          </h2>

          {/* Flex Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center relative my-[50px]">
            <div>
              <h3 className="text-[48px] leading-[120%] tracking-[.5px] text-[#4C4F54] font-[700] mb-4 mb-[20px]">
                The Force That Inspires Tomorrow
              </h3>
              <p className="text-[#4C4F54] mb-4 text-[16px]  font-[400] leading-[140%] tracking-[.5px] ">
                At CG, we don’t just manufacture products; we engineer progress.
                CG, headquartered in Mumbai, is a pioneering name in engineering
                with a legacy spanning over 88 years. CG has been the silent
                force driving the growth and transformation of everyday lives
                with more efficient engineering solutions for the world.
              </p>
              <p className="text-[#4C4F54]">
                As a leading engineering conglomerate, we have evolved from a
                trailblazing Indian enterprise into a global force. With its
                world-class manufacturing units and a workforce of over 7,000
                skilled professionals, CG designs and delivers high-performance
                engineering solutions that are built to thrive in the most
                demanding conditions globally.
              </p>
            </div>

            {/* Video Placeholder */}
            <div className=" flex justify-center items-center relative">
              <img src={rectangle} alt="" />
              <div className="absolute inset-0 flex justify-center items-center text-[48px] leading-[100%] font-[700] text-white">
                Video Placeholder
              </div>
            </div>
            <div className="hidden lg:block absolute right-[-45px] top-2">
              <img src={icon_button} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
