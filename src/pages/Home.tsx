import {
  Activity,
  AirVent,
  BadgeCheck,
  Flame,
  LayoutPanelTop,
  Menu,
  PlayCircle,
  ThermometerSun,
  WindIcon,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Logo from "../assets/Logo Coastal homes.png";
import LogoBlack from "../assets/ModularHomes.png";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CarouselFeatures } from "@/components/features";
import { GalleryCarousel } from "@/components/gallery";
import Footer from "@/components/Footer";

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);
  const [animatePs, setAnimatePs] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 50 pixels (adjust as needed)
      setIsScrolled(window.scrollY > 50);

      window.scrollY > 1600 ? setAnimatePs(true) : "";
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsScrolled2(true);

          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="h-[max-content] w-screen max-w-[1920px] bg-black flex flex-col   ">
      <div
        className={`h-[75px]   w-full  max-w-screen z-[11] flex items-center justify-between px-5 2xl:px-[75px] sticky top-0 transition-colors duration-300 ${
          isScrolled ? "bg-[#001A24]" : "bg-transparent"
        }`}
      >
        <div className="flex items-center gap-3 cursor-pointer w-[max-content]">
          <img src={Logo} alt="" className="w-[100px] h-[100px]" />
          <p className="text-white text-[21px] xl:text-[30px] font-bold hidden sm:flex">
            Modular Coastal Homes
          </p>
        </div>

        <div className="2xl:hidden cursor-pointer mr-4">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="text-white w-[30px] h-[30px] " />
            </SheetTrigger>
            <SheetContent side="left" className="bg-white/90">
              <div className="">
                <img src={LogoBlack} alt="" className="w-[100px] h-[100px]" />
                <h1 className="poppins text-2xl font-bold ">
                  Modular Coastal Homes
                </h1>

                <div className="flex flex-col items-start gap-10 ">
                  <hr className="w-full border-t border-gray-400" />
                  <SheetClose asChild>
                    <p className="text-black font-bold cursor-pointer hover:text-gray-400 ">
                      How It Works
                    </p>
                  </SheetClose>
                  <SheetClose asChild>
                    <p className="text-black font-bold cursor-pointer hover:text-gray-400 ">
                      Financing
                    </p>
                  </SheetClose>
                  <SheetClose asChild>
                    <p className="text-black font-bold cursor-pointer hover:text-gray-400 ">
                      Gallery
                    </p>
                  </SheetClose>
                  <SheetClose asChild>
                    <p className="text-black font-bold cursor-pointer hover:text-gray-400 ">
                      Floorplans
                    </p>
                  </SheetClose>
                  <SheetClose asChild>
                    <p className="text-black font-bold cursor-pointer hover:text-gray-400 ">
                      About Us
                    </p>
                  </SheetClose>
                  <SheetClose asChild>
                    <p className="text-black font-bold cursor-pointer hover:text-gray-400 ">
                      Contact Us
                    </p>
                  </SheetClose>
                  <hr className="w-full border-t border-gray-400" />
                </div>
              </div>
              <SheetFooter>
                <SheetClose asChild></SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden 2xl:flex items-center gap-10 ">
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
            About Us
          </p>
          <p className="text-white font-bold cursor-pointer hover:text-gray-400 ">
            Contact Us
          </p>
        </div>
      </div>

      <div className="h-[850px] max-w-[1920px] w-screen overflow-hidden z-[1] mt-[-110px] relative">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video-background absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://45669285.fs1.hubspotusercontent-na1.net/hubfs/45669285/Video%20Project%206.6.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className=" h-[850px] w-screen mt-[-850px] py-[200px] px-[20px] sm:px-[50px] 2xl:px-[200px] z-10 flex flex-col bg-blue-500 bg-opacity-15 shadow-2xl">
        <div className="flex items-center gap-2 ">
          <div className="h-[32px] bg-white w-[10px]"></div>
          <p className="text-[19px] lg:text-[36px] font-regular text-white overflow-hidden sm:whitespace-nowrap md:animate-typewriter">
            The Best Hurricane-Proof Modular Construction Solution
          </p>
        </div>
        <div className=" items-center gap-2 mt-4">
          <div className="w-full ">
            <p className="text-[36px] lg:text-[64px] text-white font-bold font-poppins mb-5">
              Build to Last
            </p>
            <div className=" h-[max-content] max-w-[600px]  rounded-[12px] bg-white bg-opacity-10 backdrop-blur-md border border-white/20 shadow-lg py-[20px] px-[20px] flex flex-col gap-2">
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

      <div className="w-full flex items-center justify-center">
        <div className="hidden 2xl:flex 2xl:flex-col animate-slideInRight  z-[10] h-[max-content] w-[700px] max-w-[700px] absolute top-[300px] left-[1000px]  rounded-[20px] bg-white/85 backdrop-blur-md border border-white/20 shadow-2xl py-[20px] px-[20px] gap-2 font-poppins">
          <p className="text-center text-[21px] font-bold">
            Building Method Comparison
          </p>

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
                <td className="p-2 bg-red-200 rounded-[8px]">
                  Wood or Concrete
                </td>
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
      </div>

      <div className="h-[max-content] 2xl:h-[500px] w-full bg-white px-10 py-[80px] flex gap-2">
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
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                ></iframe>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className="bg-white flex justify-center items-center p-10 w-full 2xl:hidden">
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-col animate-slideInRight  z-[10] h-[max-content] w-[700px] max-w-[700px]  rounded-[20px]   py-[20px] px-2 gap-2 font-poppins">
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
                  <td className="p-2 bg-red-200 rounded-[8px]">
                    Wood or Concrete
                  </td>
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
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-[max-content] mx-auto">
              View Detailed Comparison Report
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full h-[max-content] p-10 flex justify-center items-center bg-white gap-5">
        <h2 className="text-[27px] font-semibold text-center">
          Why Modular Construction?
        </h2>
        <div className=" flex justify-center bg-white w-full">
          <CarouselFeatures />
        </div>
      </div>

      <div className=" w-full bg-blueB px-10 py-[80px] flex flex-col gap-5 items-center">
        <h2 className="text-[27px] 2xl:text-[46px] font-bold text-white text-center">
          How Resistant is Modular Coastal Home?
        </h2>
        <h2 className="text-[27px] font-semibold text-white 2xl:block hidden">
          Before & After
        </h2>

        <div className="flex flex-col xl:flex-row gap-5 w-full justify-center">
          <div
            className={`2xl:w-1/6 h-full flex flex-col justify-center gap-10 ${
              animatePs ? "animate-slideInLeft" : ""
            }`}
          >
            <p
              className={`text-[22px] font-semibold text-white flex flex-col gap-5 border-2 border-white p-3 rounded-[8px] hover:bg-blue-500 `}
            >
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
          <div className="2xl:w-1/2 h-full flex flex-col justify-center">
            <h2 className="text-[27px] font-semibold text-white 2xl:hidden text-center">
              Before & After
            </h2>
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
            <span className="text-[19px] font-light text-white text-center mt-5">
              Category 5 Hurricane Ian
            </span>
          </div>
          <div
            className={`2xl:w-1/6 h-full flex flex-col justify-center gap-5 ${
              animatePs ? "animate-slideInRight" : ""
            }`}
          >
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
        <span className="text-[19px] font-light text-white hidden">
          Category 5 Hurricane Ian
        </span>
      </div>

      <div className="h-[max-content] w-full bg-white px-10 py-[80px] flex flex-col  justify-center items-center gap-10">
        <h2 className="text-[46px] font-bold text-black">About Us</h2>
        <div className="flex gap-5 items-center">
          <img
            src="https://i0.wp.com/bluewaterbuildersstpete.com/wp-content/uploads/2023/09/bluewaterbuilders-owners.png?w=620&ssl=1"
            className="w-[300px] h-[300px] object-cover rounded-[20px] border-2 border-blueB shadow-lg"
            alt=""
          />
          <p className="max-w-[500px] text-md ">
            Modular Coastal Homes is your trusted partner in creating
            exceptional coastal living spaces. As a certified and authorized
            Affinity Builder, we specialize in designing and constructing custom
            modular coastal homes, home expansions, site preparation, and more.
            Whether you're dreaming of a modern beachside retreat or a
            sustainable coastal haven, we bring your vision to life with
            precision and care. Our commitment to quality craftsmanship and
            customer satisfaction ensures a smooth and enjoyable experience.
            Welcome to the future of coastal living, welcome to Modular Coastal
            Homes.
          </p>
        </div>
      </div>
      <div className="h-[max-content] w-full bg-white px-10 py-[80px] flex flex-col gap-5 items-center">
        <h2 className="text-[46px] font-bold text-black">
          Featured Floor Plans{" "}
        </h2>
      </div>

      <div className="h-[1000px] w-full bg-white px-10 py-[80px] flex flex-col gap-5 items-center">
        <h2 className="text-[46px] font-bold text-black">Gallery </h2>
        <GalleryCarousel />
        <p className="bg-blueB px-3 py-2 rounded-[8px] text-white cursor-pointer hover:bg-blue-500 hover:text-white">
          <span className="!text-white">View more</span>{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
