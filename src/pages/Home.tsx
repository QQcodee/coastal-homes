import {
  Activity,
  AirVent,
  BadgeCheck,
  Flame,
  House,
  LayoutPanelTop,
  Play,
  PlayCircle,
  ThermometerSnowflakeIcon,
  ThermometerSun,
  Wind,
  WindIcon,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Logo from "../assets/LogoWithe.png";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CarouselFeatures } from "@/components/features";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 50 pixels (adjust as needed)
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsScrolled2(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-[max-content] w-screen max-w-screen bg-black flex flex-col   ">
      <div
        className={`h-[75px] hidden  w-full overflow-hidden max-w-screen z-[11] md:flex items-center justify-between px-[75px] sticky top-0 transition-colors duration-300 ${
          isScrolled ? "bg-[#001A24]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-3 cursor-pointer">
          <img src={Logo} alt="" className="w-[100px] h-[100px]" />
          <p className="text-white text-[27px] font-bold">
            Florida Modular Coastal Homes
          </p>
        </div>

        <div className="flex items-center gap-10 ">
          <p className="text-white font-bold cursor-pointer hover:text-gray-400 ">
            How It Works
          </p>
          <p className="text-white font-bold cursor-pointer hover:text-gray-400 ">
            Financing
          </p>
          <p className="text-white font-bold cursor-pointer hover:text-gray-400 ">
            Gallery
          </p>
          <p className="text-white font-bold cursor-pointer hover:text-gray-400 ">
            Floorplans
          </p>
          <p className="text-white font-bold cursor-pointer hover:text-gray-400 ">
            Contact Us
          </p>
        </div>
      </div>

      <div className="h-[850px] w-screen overflow-hidden z-[1] mt-[-110px] hidden lg:block ">
        <video autoPlay loop muted playsInline className="video-background">
          <source
            src="https://45669285.fs1.hubspotusercontent-na1.net/hubfs/45669285/Video%20Project%206.6.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className=" h-[850px] w-screen lg:mt-[-850px] py-[200px] px-[20px] lg:px-[200px] z-10 flex flex-col bg-blue-500 bg-opacity-15 shadow-2xl">
        <div className="flex items-center gap-2 ">
          <div className="h-[32px] bg-white w-[10px]"></div>
          <p className="text-[19px] lg:text-[36px] font-regular text-white overflow-hidden sm:whitespace-nowrap animate-typewriter">
            The Best Hurricane-Proof Modular Construction Solution
          </p>
        </div>
        <div className=" items-center gap-2 mt-4">
          <div className="w-full lg:w-1/2 ">
            <p className="text-[36px] lg:text-[64px] text-white font-bold font-poppins mb-5">
              Build to Last
            </p>
            <div className=" h-[max-content]  rounded-[12px] bg-white bg-opacity-10 backdrop-blur-md border border-white/20 shadow-lg py-[20px] px-[20px] flex flex-col gap-2">
              <p className="text-[21px] font-regular text-white font-poppins textShadow-lg ">
                We are a team of professionals dedicated to providing you with
                the highest quality Hurricane-Proof Modular Construction
                Solution.
              </p>
              <p className="text-[15px] font-regular text-blue-500 flex items-center gap-2 bg-white py-[10px] px-[20px] rounded-[20px] w-[max-content] mt-3 ">
                Authorized Affinity Builder <BadgeCheck />
              </p>
            </div>
            <p className="hidden lg:flex w-screen  text-[19px] lg:w-[600px] font-regular text-white mt-5 animate-fadeIn">
              We focus on building strong, durable, flood-resistant and
              energy-efficient homes in the Tampa Bay area with a focus on speed
              and quality. Our Homes are rated to withstand up to 180 MPH winds
              and thanks to our construction methods, we can build a home in as
              little as 6 months
            </p>

            <button className=" bg-blue-500 w-[max-content] text-white text-[21px] font-bold rounded-[20px] py-[10px] px-[20px] mt-[20px] hover:transform hover:scale-105 hover:bg-blue-600">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="hidden 2xl:flex 2xl:flex-col animate-slideInRight absolute z-[10] h-[max-content] w-[700px] top-[300px] left-[1000px] rounded-[20px] bg-white/65 backdrop-blur-md border border-white/20 shadow-2xl py-[20px] px-[20px] gap-2 font-poppins">
        <p className="text-center text-[21px] font-bold">
          Building Method Comparison
        </p>
        <hr className="w-full h-[1px] bg-gray-400" />
        <table className="w-full border-separate border-spacing-y-3 border-spacing-x-2 ">
          <thead>
            <tr>
              <th className="p-2 text-left"></th>
              <th className="p-2 text-left">Coastal Homes</th>
              <th className="p-2 text-left">Traditional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Hurricane Wind Rating</td>
              <td className="p-2 bg-green-200 rounded-[8px]">180 MPH </td>
              <td className="p-2 bg-red-200 rounded-[8px]">
                Less than 150 MPH
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <hr className="border-t border-gray-400" />
              </td>
            </tr>
            <tr>
              <td className="p-2 ">FEMA Compliant</td>
              <td className="p-2 bg-green-200 rounded-[8px]">YES</td>
              <td className="p-2 bg-green-200 rounded-[8px]">YES</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <hr className="border-t border-gray-400" />
              </td>
            </tr>
            <tr>
              <td className="p-2 ">Foundation - Concrete Masonry</td>
              <td className="p-2 bg-green-200 rounded-[8px]">YES</td>
              <td className="p-2 bg-green-200 rounded-[8px]">YES</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <hr className="border-t border-gray-400" />
              </td>
            </tr>
            <tr>
              <td className="p-2 ">Exterior Walls</td>
              <td className="p-2 bg-green-200 rounded-[8px]">
                2 X 6 Wood Frame
              </td>
              <td className="p-2 bg-red-200 rounded-[8px]">Wood or Concrete</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <hr className="border-t border-gray-400" />
              </td>
            </tr>
            <tr>
              <td className="p-2 ">Construction Time</td>
              <td className="p-2 bg-green-200 rounded-[8px]">
                Less Than 6 Months
              </td>
              <td className="p-2 bg-red-200 rounded-[8px]">
                12 Months to 2+ Years
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <hr className="border-t border-gray-400" />
              </td>
            </tr>
            <tr>
              <td className="p-2 ">Quialifies for Construction Loans</td>
              <td className="p-2 bg-green-200 rounded-[8px]">YES</td>
              <td className="p-2 bg-green-200 rounded-[8px]">YES</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <hr className="border-t border-gray-400" />
              </td>
            </tr>
            <tr>
              <td className="p-2 ">Appraised Value for like Built Homes</td>
              <td className="p-2 bg-green-200 rounded-[8px]">Same</td>
              <td className="p-2 bg-green-200 rounded-[8px]">Same</td>
            </tr>
            <tr>
              <td colSpan={3}>
                <hr className="border-t border-gray-400" />
              </td>
            </tr>
            <tr>
              <td className="p-2 ">Building Enviroment</td>
              <td className="p-2 bg-green-200 rounded-[8px]">
                Climate Controled
              </td>
              <td className="p-2 bg-red-200 rounded-[8px]">
                Rain / Outdoor Weather
              </td>
            </tr>

            <tr>
              <td colSpan={3}>
                <hr className="border-t border-gray-400" />
              </td>
            </tr>
            <tr>
              <td className="p-2">Process</td>
              <td className="p-2 bg-green-200 rounded-[8px]">
                Simultaneous Tasks
              </td>
              <td className="p-2 bg-red-200 rounded-[8px]">
                One Task At a Time
              </td>
            </tr>

            <tr>
              <td colSpan={3}>
                <hr className="border-t border-gray-400" />
              </td>
            </tr>
            <tr>
              <td className="p-2">Price</td>
              <td className="p-2 bg-green-200 rounded-[8px]">
                $10,000 to $25,000
              </td>
              <td className="p-2 bg-red-200 rounded-[8px]">$250,000</td>
            </tr>
          </tbody>
        </table>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Detailed Comparison Report
        </button>
      </div>

      <div className=" lg:h-[500px] w-full bg-white px-10 py-[80px]">
        <div className="lg:w-1/2 h-full flex flex-col justify-center ">
          <div
            ref={ref}
            className={`text-[21px] lg:text-[32px] font-semibold text-white w-full h-[max-content] bg-blueB p-3 rounded-[8px] text-center  ${
              isScrolled2 ? "animate-slideInLeft" : "opacity-0"
            }`}
          >
            Proven track record, highly scalable capacity
          </div>
          <p
            className={` w-full p-5 text-[21px] text-justify ${
              isScrolled2 ? "animate-fadeIn" : "opacity-0"
            }`}
          >
            Modular construction reduces project costs by leveraging its
            factory-built technology. Up to 80% of the project is delivered
            factory-complete.{" "}
          </p>
          <div className="w-full flex justify-center ">
            <Popover>
              <PopoverTrigger
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex gap-2 items-center ${
                  isScrolled2 ? "animate-slideInRight" : "opacity-0"
                }`}
              >
                <PlayCircle /> Watch Real Delivery and Install
              </PopoverTrigger>
              <PopoverContent className="w-[max-content]">
                <iframe
                  src="https://www.youtube.com/embed/ur1-mW-Itf4?si=lZ8MjitieNgtMRiV"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  referrerpolicy="strict-origin-when-cross-origin"
                ></iframe>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-[max-content] p-10 flex justify-center items-center bg-white gap-5">
        <h2 className="text-[27px] font-semibold text-center">
          Why Modular Construction?
        </h2>
        <div className=" flex justify-center bg-white">
          <CarouselFeatures />
        </div>
      </div>

      <div className="hidden h-[1000px] w-full bg-blueB px-10 py-[80px] flex flex-col gap-5 items-center">
        <h2 className="text-[46px] font-bold text-white">
          How Resistant is Modular Coastal Home?
        </h2>
        <h2 className="text-[27px] font-semibold text-white">Before & After</h2>

        <div className="flex gap-5 w-full justify-center">
          <div className="w-1/6 h-full flex flex-col justify-center gap-10 ">
            <p className="text-[22px] font-semibold text-white flex flex-col gap-5 border-2 border-white p-3 rounded-[8px] hover:bg-blue-500">
              <WindIcon className="w-[50px] h-[50px] text-white" />
              Wind Resistant up to 180 MPH
            </p>
            <p className="text-[22px] font-semibold text-white flex flex-col gap-5 border-2 border-white p-3 rounded-[8px] hover:bg-blue-500">
              <Flame className="w-[50px] h-[50px] text-white" />
              Fire-resistant
            </p>
            <p className="text-[22px] font-semibold text-white flex flex-col gap-5 border-2 border-white p-3 rounded-[8px] hover:bg-blue-500">
              <Activity className="w-[50px] h-[50px] text-white" />
              Earthquake resistant{" "}
              <span className="text-[15px]">
                (have withstood 8+ magnitude earthquakes)
              </span>
            </p>
          </div>
          <div className="w-1/2 h-full flex flex-col justify-center">
            <ReactCompareSlider
              className="cursor-pointer"
              itemOne={
                <ReactCompareSliderImage
                  src="https://affinitymodular.com/hs-fs/hubfs/before-hurricane.jpg?width=1496&height=945&name=before-hurricane.jpg"
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src="https://affinitymodular.com/hs-fs/hubfs/after-hurricane.jpg?width=1496&height=945&name=after-hurricane.jpg"
                  alt="Image two"
                />
              }
            />
          </div>
          <div className="w-1/6 h-full flex flex-col justify-center gap-5 ">
            <p className="text-[22px] font-semibold text-white flex flex-col gap-5 border-2 border-white p-3 rounded-[8px] hover:bg-blue-500">
              <ThermometerSun className="w-[50px] h-[50px] text-white" />
              Even temperatures year-round
            </p>
            <p className="text-[22px] font-semibold text-white flex flex-col gap-5 border-2 border-white p-3 rounded-[8px] hover:bg-blue-500">
              <LayoutPanelTop className="w-[50px] h-[50px] text-white" />
              Ultra-high-performance windows
            </p>
            <p className="text-[22px] font-semibold text-white flex flex-col gap-5 border-2 border-white p-3 rounded-[8px] hover:bg-blue-500">
              <AirVent className="w-[50px] h-[50px] text-white" />
              Advanced fresh air systems and filtration{" "}
              <span className="text-[15px]">
                Our systems replace the air in your home 3+ times per day, and
                remove particles like dust and pollen
              </span>
            </p>
          </div>
        </div>
        <span className="text-[19px] font-light text-white">
          Category 5 Hurricane Ian
        </span>
      </div>
      <div className="h-[1000px] w-full bg-white px-10 py-[80px] flex flex-col gap-5 items-center">
        <h2 className="text-[46px] font-bold text-black">Gallery </h2>
      </div>
    </div>
  );
};

export default Home;
