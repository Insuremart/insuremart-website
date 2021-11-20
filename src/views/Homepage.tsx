import React from "react";
import Modal from "react-modal";
import Header from "../components/Header";
import ComingSoon from "../assets/icons/omex_coming_soon.svg";
import AppStore from "../assets/icons/appstore.svg";
import PlayStore from "../assets/icons/playstore.svg";
import PaperPlane from "../assets/icons/omex_paperplane.svg";
import Fire from "../assets/icons/insure_fire.svg";
import MotorCar from "../assets/icons/jeep_insure.svg";
import Life from "../assets/icons/insure_life.svg";
import Ship from "../assets/icons/insure_ship.svg";
import Home from "../assets/icons/insure_home.svg";
import Burglar from "../assets/icons/insure_burglar.svg";
import Gadget from "../assets/icons/gadget.svg";
import Travel from "../assets/icons/insure_global.svg";
import Person from "../assets/icons/insure_accident.svg";
import Heart from "../assets/icons/insure_cardiogram.svg";

import "./style.css";

Modal.setAppElement("#root");

const services = [
  {
    img: `${MotorCar}`,
    title: "Motor Insurance",
    status: "available",
    content:
      "Buy or renew and customize your motor insurance policy from any of your preferred insurance providers which covers loss or accidental damage to your vehicle and/or a third party ",
  },
  {
    img: `${Fire}`,
    title: "Fire",
    status: "coming soon",
    content:
      "Buy or renew your fire insurance policy which covers loss or damage to your property as a result of fire",
  },
  {
    img: `${Life}`,
    title: "Life Assurance Policies",
    status: "coming soon",
    content:
      "Buy, renew, or follow up on your life assurance policies from any of your preferred insurance providers",
  },
  {
    img: `${Ship}`,
    title: "Marine Cargo Insurance",
    status: "coming soon",
    content:
      "Buy a marine cargo insurance which provides cover for cargo being imported or exported via maritime transport",
  },
  {
    img: `${Home}`,
    title: "Householders",
    status: "coming soon",
    content:
      "Buy or renew your householder’s policy which covers loss or damages to a residence, along with furniture, fixtures and fittings and other assets      ",
  },
  {
    img: `${Burglar}`,
    title: "Burglary Insurance",
    status: "coming soon",
    content:
      "Buy or renew your burglary insurance policy which provides cover for loss or damage as a result of burglary/housebreaking or attempt thereof",
  },
  {
    img: `${Gadget}`,
    title: "Gadget Insurance",
    status: "coming soon",
    content:
      "Buy or renew your gadget insurance policies that provides compensation for loss or damage to your gadgets ,i.e smart phone or watch, tablets, laptops, etc.",
  },
  {
    img: `${Travel}`,
    title: "Travel Insurance",
    status: "coming soon",
    content:
      "Buy a travel insurance policy for anywhere around the world, from any of your preferred insurance provider",
  },
  {
    img: `${Person}`,
    title: "Personal Accident Insurance",
    status: "coming soon",
    content:
      "Buy or renew your personal accident insurance which provides financial compensation should you be involved in any accident",
  },
  {
    img: `${Heart}`,
    title: "Health Insurance",
    status: "coming soon",
    content:
      "Buy and renew and customize your health insurance policies from any of your preferred health insurance providers",
  },
];

const customStyles = {
  overlay: {
    backgroundColor: "rgba(32, 51, 101, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "80%",

    borderRadius: "20px",
    borderColor: "#ffffff",
    padding: "50px",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const customStyles2 = {
  overlay: {
    backgroundColor: "rgba(32, 51, 101, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    width: "90%",
    height: "90%",

    borderRadius: "20px",
    borderColor: "#ffffff",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Homepage = () => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [mobModalIsOpen, setMobModalIsOpen] = React.useState(false);

  return (
    <>
      <div>
        <Header />
        <div className=" my-12 mx-auto md:px-12 md:ml-4">
          <div className="flex flex-wrap -mx-1">
            <div className="my-1  w-full md:w-1/2 lg:my-4 lg:w-1/2">
              <div className="overflow-hidden px-2 mx-8">
                <img
                  src="/img/insure_image.png"
                  alt=""
                  className=""
                />
              </div>
            </div>
            <div className="my-1 px-1  mx-8 md:mx-0 w-full lg:pl-20 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
              <div className="lg:w-4/5">
                <h1 className="text-3xl font-bold text-butterflybush-500 leading-relaxed	">
                  Your one-stop shop for all your insurance services.{" "}
                </h1>
              </div>
     
              <ul className="lg:w-4/5 text-justify text-butterflybush-200 font-light	tracking-wide mt-8 mb-8 lg:mb-16">
                <li className="list-decimal mb-4">
                Buy or renew your insurance policies from any of your preferred insurance providers and get your insurance documents instantly
                </li>
                <li className="list-decimal mb-4">
                Lodge/report a claim in mere seconds, and easily monitor the progress of your claim in real-time
                </li>
                <li className="list-decimal mb-4">
                Renew your vehicle license, road worthiness and other vehicular documents, along with your motor insurance policy, and receive your documents speedily                </li>
              </ul>
              <div className="flex mb-16 md:hidden">
                <button
                  className="flex bg-butterflybush-500 px-2 py-2 text-white rounded-2xl lg:w-64 lg:h-20 mr-4"
                  onClick={() => setMobModalIsOpen(true)}
                >
                  <img  alt="" src={PlayStore} className=" my-auto w-12 h-12 mr-2" />
                  <p className="w-full text-left mr-8 lg:pr-4 font-light lg:mt-2 lg:ml-2 lg:tracking-widest">
                    Download on play store{" "}
                  </p>
                </button>
                <button
                  className="flex bg-butterflybush-500 px-2 py-2 text-white rounded-2xl lg:w-64 lg:h-20"
                  onClick={() => setMobModalIsOpen(true)}
                >
                  <img  alt="" src={AppStore} className=" my-auto w-12 h-12 mr-2" />
                  <p className="w-full text-left mr-8 lg:pr-4 font-light lg:mt-2 lg:ml-2 lg:tracking-widest">
                    Download on app store{" "}
                  </p>
                </button>
              </div>
              <div className="flex mb-16 hidden md:block">
                <div className="flex">
                  <button
                    className="flex bg-butterflybush-500 px-2 py-2 text-white rounded-2xl lg:w-60 lg:h-20 mr-4"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <img  alt="" src={PlayStore} className=" my-auto w-12 h-12 mr-2" />
                    <p className="w-full text-left mr-8 lg:pr-4 font-light lg:mt-2 lg:ml-2 lg:tracking-widest">
                      Download on play store{" "}
                    </p>
                  </button>
                  <button
                    className="flex bg-butterflybush-500 px-2 py-2 text-white rounded-2xl lg:w-60 lg:h-20"
                    onClick={() => setModalIsOpen(true)}
                  >
                    <img  alt="" src={AppStore} className=" my-auto w-12 h-12 mr-2" />
                    <p className="w-full text-left mr-8 lg:pr-4 font-light lg:mt-2 lg:ml-2 lg:tracking-widest">
                      Download on app store{" "}
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-center mt-16 mb-48 ">
          <div className="">
            <img alt=""
              src="/img/cornerstone.png"
              className="w-28 h-20 mr-16 mt-16 ml-16"
            />
            <img
             alt=""
              src="/img/mutual_benefits.png"
              className="w-28 h-20 mr-16 mt-16 ml-16"
            />
            <img  alt="" src="/img/allianz.png" className="w-28 h-20 mt-16 ml-16" />
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center mt-16 mb-48 ">
          <div className="flex items-center justify-center ">
            <img alt="" src="/img/cornerstone.png" className="w-28 h-20 mr-16" />
            <img  alt="" src="/img/mutual_benefits.png" className="w-28 h-20 mr-16" />
            <img  alt="" src="/img/allianz.png" className="w-28 h-20" />
          </div>
        </div>
        <div className="hidden md:block mb-64">
          <div className="flex flex-wrap mb-4">
            <div className="w-9/12">
              <p className="w-4/5 leading-relaxed text-4xl text-butterflybush-500 font-bold mx-auto text-center">
                Insurance plans
              </p>
              <div className="flex flex-wrap mb-4 p-16">
                {services.map((element) => (
                  <div className="cardN" key={element.title}>
                    <div className="flex mb-8  justify-between items-center">
                      <img
                        src={element.img}
                        alt=""
                        className=" w-12 h-12"
                        // style={{ boxShadow: "0px 14px 34px #BAB4F5" }}
                      />
                      {element.status === "available" ? null : (
                        <p className="py-2 bg-yellow-100 px-4 text-butterflybush-500 text-xs rounded-xl">
                          Coming soon
                        </p>
                      )}
                    </div>
                    <p className="text-xl text-butterflybush-500">
                      {element.title}
                    </p>
                    <p className="w-full mx-auto text-sm font-thin text-left mt-4 text-gray-600 mb-8 tracking-wide">
                      Buy or renew and customize your motor insurance policy
                      from any of your preferred insurance providers which
                      covers loss or accidental damage to your vehicle and/or a
                      third party
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-3/12 ">
              <img
                src="/img/insure_mobile.png"
                alt=""
                className="mt-64"
                style={{ height: "60vh" }}
              />
            </div>
          </div>
        </div>

        <div className="md:hidden mb-40">
          <p className="w-4/5 leading-relaxed text-4xl text-butterflybush-500 font-bold mx-auto text-center mb-8">
            Insurance plans
          </p>
          <div>
            {services.map((element) => (
              <div
              className="cardN"
                style={{ margin: "auto", marginBottom: "2rem" }}
                key={element.title}
              >
                <div className="flex mb-8  justify-between items-center">
                  <img
                    src={element.img}
                    alt=""
                    className=" w-12 h-12"
                    // style={{ boxShadow: "0px 14px 34px #BAB4F5" }}
                  />
                  {element.status === "available" ? null : (
                    <p className="py-2 bg-yellow-100 px-4 text-butterflybush-500 text-xs rounded-xl">
                      Coming soon
                    </p>
                  )}
                </div>
                <p className="text-xl text-butterflybush-500">
                  {element.title}
                </p>
                <p className="w-full mx-auto text-sm font-thin text-left mt-4 text-gray-600 mb-8 tracking-wide">
                  Buy or renew and customize your motor insurance policy from
                  any of your preferred insurance providers which covers loss or
                  accidental damage to your vehicle and/or a third party
                </p>
              </div>
            ))}
          </div>
        </div>

        <footer className="mx-auto">
          <div className="w-full bg-butterflybush-500 text-white">
            <div className="xl:px-40 pb-12 lg:px-20 md:px-10 sm:px-5 px-10">
              <div className="w-full pt-12 flex flex-col sm:flex-row space-y-2 justify-start">
                <div className="w-full sm:w-1/5 pr-6 flex flex-col space-y-4">
                  <a
                    className="text-sm text-mirage-500 font-normal text-xl leading-relaxed inline-block py-2 whitespace-nowrap"
                    href="./"
                  >
                    <img
                      src="/img/logo_insure.jpg"
                      alt=""
                      className="w-24 h-16"
                    />
                  </a>
                </div>

                <div className="">
                  <div className="mr-16">
                    <p className="text-xl mt-12 lg:mt-0 font-light mr-8 tracking-wide mb-4">
                      Insuremart
                    </p>
                    <p className="text-lg  font-light mb-4">Services</p>
                    <p className="text-lg font-light mb-4">About Us</p>
                    <p className="text-lg font-light mb-4">
                      Terms &amp; Conditions
                    </p>
                  </div>
                </div>
                <div className="">
                  <p className="text-xl mt-12 lg:mt-0 font-light mr-8 tracking-wide mb-4">
                    CONTACT
                  </p>
                  <p className="text-lg font-light mb-4"> +2349126675905</p>
                  <p className="text-lg font-light mb-4">
                    info@theinsuremart.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
        >
          <div>
            <div className="flex flex-wrap">
              <div className="w-2/5">
                <img src={ComingSoon} className="h-72 " alt="" />
              </div>
              <div className="w-3/5">
                <p className="text-2xl mx-auto text-center tracking-widest font-normal text-butterflybush-500">
                  COMING SOON
                </p>
                <p className="font-light text-butterflybush-200 w-3/5 mx-auto mt-4 text-center leading-relaxed mb-12">
                  We are currently making the final changes to help load up your
                  expirence
                </p>
                <p className="font-normal text-3xl text-butterflybush-500 w-3/5 mx-auto mt-4 text-center leading-relaxed mb-12">
                  30 - 09 - 2021
                </p>
              </div>
            </div>
            <div className="text-center">
              {/* <input type="text" className="text-center px-16 py-4 w-3/5 rounded-2xl bg-butterflybush-200"
                />
                 */}
              <div className="hero bg-gredient-dark h-400px flex flex-col px-2">
                <div className="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
                  <form className="flex flex-row">
                    <input
                      className=" px-4 rounded-l-2xl h-16 bg-gray-100 text-butterflybush-200 py-2 font-light w-full py-1 px-2 outline-none text-lg text-gray-600"
                      type="text"
                      placeholder="Please enter your email"
                    />
                    <span className="flex items-center bg-gray-100 rounded-2xl rounded-l-none border-0  font-bold text-grey-100">
                      <button
                        className="bg-butterflybush-500 hover:bg-gredient-light text-lg text-white font-bold py-3 px-6 rounded-2xl"
                        onClick={() => setMobModalIsOpen(false)}
                      >
                        <img src={PaperPlane} alt="" />
                      </button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>

        <Modal
          isOpen={mobModalIsOpen}
          onRequestClose={() => setMobModalIsOpen(false)}
          style={customStyles2}
        >
          <div>
            <div className="">
              <div className="">
                <img src={ComingSoon} className="h-72" alt="" />
              </div>
              <div className="">
                <p className="text-2xl mx-auto text-center tracking-widest font-normal text-butterflybush-500">
                  COMING SOON
                </p>
                <p className="font-light text-butterflybush-200 w-5/5 mx-auto mt-4 text-center leading-relaxed mb-12">
                  We are currently making the final changes to help load up your
                  expirence
                </p>
                <p className="font-normal text-3xl text-butterflybush-300 mx-auto mt-4 text-center leading-relaxed mb-12">
                  30 - 09 - 2021
                </p>
              </div>
            </div>
            <div className="text-center">
              {/* <input type="text" className="text-center px-16 py-4 w-3/5 rounded-2xl bg-butterflybush-200"
                />
                 */}
              <p className="font-light text-butterflybush-200 w-5/5 mx-auto mt-4 text-center leading-relaxed mb-12">
                Would you like us to inform you when we go live
              </p>
              <div className="hero bg-gredient-dark  flex flex-col px-2">
                <div className="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
                  <form className="flex flex-row">
                    <input
                      className=" px-4 rounded-l-2xl h-16 bg-gray-100 text-butterflybush-200 py-2 font-light w-full py-1 px-2 outline-none text-lg text-gray-600"
                      type="text"
                      placeholder="Please enter email"
                    />
                    <span className="flex items-center bg-gray-100 rounded-2xl rounded-l-none border-0  font-bold text-grey-100">
                      <button
                        className="bg-butterflybush-500 hover:bg-gredient-light text-lg text-white h-16 font-bold px-6 rounded-2xl"
                        onClick={() => setMobModalIsOpen(false)}
                      >
                        <img src={PaperPlane} alt="" className="h-16 w-16" />
                      </button>
                    </span>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Homepage;
