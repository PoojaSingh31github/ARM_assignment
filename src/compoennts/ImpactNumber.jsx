import React from "react";
import bgImageUrl from "../assets/multiple_dotts.png";
import { motion, useScroll, useTransform } from "framer-motion";
import greenUpArrow from "../assets/green_up_arrow.png";

const impactData = [
  { label: "Standalone Revenue", value: "₹9,329 Cr", value_usd: "$1.06B" },
  { label: "Consolidated Revenue", value: "₹9,909 Cr", value_usd: "$1.13B" },
  { label: "Unexecuted Order Book", value: "₹10,631 Cr", value_usd: "$1.21B" },
  { label: "Order Intake Reached", value: "₹13,526 Cr", value_usd: "$1.6B" },
  { label: "(PBT) Growth", value: "17%", hasGrowthIcon: true },
  { label: "Revenue Growth YoY", value: "23%", hasGrowthIcon: true },
  { label: "ROCE", value: "33%" }
];

export default function ImpactNumbers() {
  const ref = React.useRef(null);
  const [isLaptop, setIsLaptop] = React.useState(false);

   React.useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024); // lg breakpoint
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);


  return (
    <div
    ref={ref}
      className="w-screen h-screen flex items-center justify-center px-4 md:px-10 my-[100px]"
      style={{
        backgroundImage: `url("${bgImageUrl}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full md:m-4 pt-20 md:p-8 flex flex-col md:flex-row py-[100px]">
        <div className="w-full md:w-1/3 flex flex-col justify-center ">
          <motion.div style={{ y }} className="font-helvetica h-full">
            <div
              className="text-[60px] md:text-[92px] font-bold leading-none tracking-normal align-middle"
              style={{
                WebkitTextStroke: '3px #6b7280',
                WebkitTextFillColor: 'transparent',
                fontFamily: 'Helvetica, Arial, sans-serif',
              }}
            >
              Impact
            </div>
            <div className="text-[60px] md:text-[92px] font-bold leading-none tracking-normal align-middle text-[#005CAB]">
              numbers
            </div>
          </motion.div>
        </div>


        <div className="w-full md:w-2/3 mt-10 md:mt-0 md:pl-12 flex flex-col justify-center">
          <div className="space-y-0">
            {impactData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row md:justify-between md:items-center border-b ${index > 0 ? '' : 'border-t'} border-[#99BEDD] w-full py-4`}
              >
                <span className="text-gray-600 text-[14px] md:text-[20px]">
                  {item.label}
                </span>
                <span className="text-[#005CAB] text-[30px] md:text-[40px] font-bold flex items-center">
                  {item.value}
                  {item.value_usd && (
                    <span className="text-gray-500 text-[20px] md:text-[32px] font-normal ml-2">
                      ({item.value_usd})
                    </span>
                  )}
                  {item.hasGrowthIcon && (
                    <img src={greenUpArrow} alt="greenUpArrow" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


 