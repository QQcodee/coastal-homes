import Logo from "../assets/Logo Coastal homes.png";

const Footer = () => {
  return (
    <footer className="bg-blueB">
      <div className="flex flex-col md:flex-row items-center justify-center h-[max-content] ">
        <div className="w-full sm:w-1/4 bg-blueB h-full flex flex-col justify-center items-start p-10">
          <img src={Logo} alt="" className="w-[150px] h-[150px]" />
          <h2 className="text-white text-2xl">Modular Coastal Homes</h2>
          <nav className=" mt-10 font-medium text-lg">
            <ul className="flex flex-col  ">
              <li className="text-white cursor-pointer ">Home</li>
              <li className="text-white cursor-pointer">About</li>
              <li className="text-white cursor-pointer">Contact</li>
            </ul>
          </nav>
        </div>
        <div className="w-full sm:w-2/4 bg-blueB h-full">
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=12385%2074th%20ave&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            title="12385 74th ave"
            aria-label="12385 74th ave"
            className="w-full h-[250px]"
          ></iframe>
        </div>
        <div className="w-full sm:w-1/4 bg-blueB h-full mb-10">
          <p className="text-white p-10 text-center">
            <span className="text-2xl font-bold">Modular Coastal Homes</span>
            <br />
            <span className="underline"> General Contractor</span>
            <br /> <br />
            Office: (727) 580-55-50
            <br /> <br /> 12385 74th ave Seminole, FL. 33772 <br /> <br />
            Hours Mon-Fri 8:00a-5:00p <br /> <br />
            office@modularcoastalhomes.com <br /> <br />
            Licence: CGC-1505066 CPC-1457007
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
