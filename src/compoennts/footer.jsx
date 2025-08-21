import React from "react";
import footerLogo from "../assets/footerLogo.png"; // Adjust the path as necessary
import logo from "../assets/Logo.png";
import india from "../assets/imdia.png";
import muru from "../assets/muru.png";
import location from "../assets/location.png";
import email from "../assets/email.png";

export default function Footer() {
  return (
    <footer className="bg-[#F4F5F8]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        {/* Company Info */}
        <div>
          <img src={logo} alt="" />
          <div className="flex gap-2 justify-start items-start mt-4">
            <img src={location} alt="" className="w-[20px] h-[20px]" />
            <p className="text-[#4C4F54] text-[14px] font-[400] leading-[140%] tracking-[-1.9%]">
              CG Power and Industrial Solutions Limited <br />
              10th Floor, CG House, Dr Annie Besant Road, <br />
              Worli, Mumbai - 400030.
            </p>
          </div>
          <div className="flex gap-2 justify-start items-center mt-4">
            <img src={email} alt="" className="w-[20px] h-[20px]" />
            <p className="mt-2 text-[#4C4F54] text-[14px] font-[400] leading-[140%] tracking-[-1.9%]">
              help@cgglobal.com
            </p>
          </div>

          <p className="mt-6 text-[#005CAB] font-[700] text-[16px] leading-[140%] tracking-[.5%]">
            Our Parent Companies:
          </p>
          <div className="flex items-center space-x-4 mt-2">
            <img src={muru} alt="" className="[98.36px] h-[60px]" />
            <img src={india} alt="" className="[98.36px] h-[60px]" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="font-bold text-[#005CAB] mb-3">Company</h3>
          <ul className="space-y-3 text-[#4C4F54] text-[14px] font-[400] leading-[140%] tracking-[-1.9%]">
            <li>Company Overview</li>
            <li>Leadership & Top Management</li>
            <li>Subsidiaries & Joint Ventures</li>
            <li>Our Purpose & Values</li>
            <li>Sectors We Serve</li>
            <li>ESG</li>
            <li>Technology + R&D</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-bold text-[#005CAB] mb-3">Solutions</h3>
          <ul className="space-y-3 text-[#4C4F54] text-[14px] font-[400] leading-[140%] tracking-[-1.9%]">
            <li>Transformers</li>
            <li>Switchgears</li>
            <li>Motors</li>
            <li>Drives & Automation</li>
            <li>Railways</li>
            <li>Consumer Durables</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-[#005CAB] mb-3">Resources</h3>
          <ul className="space-y-3 text-[#4C4F54] text-[14px] font-[400] leading-[140%] tracking-[-1.9%]">
            <li>Contact Us</li>
            <li>Case Studies</li>
            <li>Investors</li>
            <li>Policies</li>
            <li>CG in the News</li>
            <li>Disclaimer</li>
          </ul>

        </div>
      </div>
      <div className="flex justify-center items-center w-full mb-15">
        <img src={footerLogo} alt="" />
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#005CAB] text-white text-center flex justify-center items-center text-sm h-[40px]">
        Copyright © 2025. CG Power & Industrial Solutions Ltd. All rights
        reserved.
      </div>
    </footer>
  );
}
