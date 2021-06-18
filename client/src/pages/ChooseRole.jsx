import React from "react";
import Navbar from "../components/Navbar.jsx";
import { Link } from "react-router-dom";
import tw from "twin.macro";

// assets
import Farmer from "../assets/farmer.jpg";
import Investor from "../assets/investors.jpg";

// compoenents
import Footer from "../components/Footer.jsx";

// styled components with tailwind
const Button = tw.span`rounded bg-crowde-100 hover:bg-crowde-200 py-2 px-4 text-white mx-3`;

const ChooseRole = () => {
  return (
    <>
      <Navbar />
      <div className="md:mx-52 md:mt-24 mb-36">
        <div className="flex items-center justify-between w-full my-4 pl-4 sm:pr-4">
          <div className="mr-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-7 md:leading-10 mb-1 truncate">
              Choose Role
            </h2>
            <div className="font-base tracking-tight text-gray-600">
              Lorem ipsum is placeholder text commonly used in the graphic.
            </div>
          </div>
        </div>
        <div className="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2 ">
          <div className="flex flex-col ">
            <div className="bg-white shadow-md  rounded-3xl p-4 bg-gray-300">
              <div className="flex-none lg:flex">
                <div className=" h-full w-full lg:h-48 lg:w-48   lg:mb-0 mb-3">
                  <img
                    src={Farmer}
                    alt="Just a flower"
                    className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
                  />
                </div>
                <div className="flex-auto ml-3 justify-evenly py-2">
                  <div className="flex flex-wrap ">
                    <h2 className="flex-auto text-lg font-medium">
                      Cari dana untuk usaha lahan anda ?
                    </h2>
                  </div>
                  <p className="mt-3"></p>
                  <div className="flex py-4  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p className="">Description</p>
                    </div>
                  </div>
                  <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                  <div className="flex space-x-3 text-sm font-medium">
                    <div className="flex-auto flex space-x-3"></div>
                    <Button>
                      <Link to="/register-petani">Register Petani</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="bg-white shadow-md  rounded-3xl p-4 bg-gray-300">
              <div className="flex-none lg:flex">
                <div className=" h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
                  <img
                    src={Investor}
                    alt="Just a flower"
                    className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
                  />
                </div>
                <div className="flex-auto ml-3 justify-evenly py-2">
                  <div className="flex flex-wrap ">
                    <h2 className="flex-auto text-lg font-medium">
                      Punya dana untuk memberikan pendanaan kepada petani ?
                    </h2>
                  </div>
                  <p className="mt-3"></p>
                  <div className="flex py-4  text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <p className="">Description</p>
                    </div>
                  </div>
                  <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
                  <div className="flex space-x-3 text-sm font-medium">
                    <div className="flex-auto flex space-x-3"></div>
                    <Button>
                      <Link to="/register-investor">Register Investor</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChooseRole;
