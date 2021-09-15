import React from "react";
import Logo from "../../../images/icons/omex_logo.svg";
import MenuBar from "../../../images/icons/insure_menu.svg";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <header class=" md:flex md:items-center md:justify-between p-4 pb-0 md:pb-4">
        <div class="flex items-center justify-between mb-4 md:mb-0">
          <h1 class="leading-none text-2xl text-grey-darkest">
            <div className="flex align-middle lg:ml-12">
              <a
                className="text-sm text-mirage-500 font-normal text-xl leading-relaxed inline-block mr-4 whitespace-nowrap lg:mx-4 xl:mx-4 "
                href="/#"
              >
                <img src="/img/logo_insure.jpg" alt=""  className="w-24 h-16"/>
              </a>
             
            </div>
          </h1>

          <button
            class="text-black hover:text-orange md:hidden"
            href="#"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <img src={MenuBar} alt="" />
          </button>
        </div>

        <div className="inline-block">
        <div className="float-right">
        <nav
          className={
            "lg:flex flex-grow lg:mr-32 items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul class="list-reset md:flex md:items-center ">
            <li class="md:ml-16 ">
              <a
                class="block no-underline font-medium text-butterflybush-500 hover:underline py-2 text-grey-darkest hover:no-underline hover:text-black md:border-none md:p-0 "
                href="/#"
              >
                About
              </a>
            </li>
            <li class="md:ml-16">
              <a
                class=" block no-underline font-medium text-butterflybush-500 hover:underline py-2 text-grey-darkest hover:no-underline md:border-none md:p-0"
                href="/#"
              >
                Insurance Claims
              </a>
            </li>
            <li class="md:ml-16">
              <a
                class=" block no-underline font-medium text-butterflybush-500 hover:underline py-2 text-grey-darkest md:border-none md:p-0 hover:no-underline"
                href="/#"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        </div>
        </div>
      </header>
      {/* <header>
        <div>
          <div
          //  className="bg-pampas-500"
          >
            <div className="">
              <nav className="relative flex flex-wrap items-center justify-between px-2 py-2 bg-pampas-500">
                <div className=" px-4 flex flex-wrap items-center justify-between">
                  <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-between">
                    <div className="flex align-middle ml-4">
                      <a
                        className="text-sm text-mirage-500 font-normal text-xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap lg:mx-4 xl:mx-4 "
                        href="/#"
                      >
                        <img src={Logo} alt="" />
                      </a>
                      <p className="my-auto font-bold text-xl text-butterflybush-500">
                        Omexhub
                      </p>
                    </div>
                    <div className="right-0">
                      <button
                        className="lg:hidden"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                      >
                        <img src={MenuBar} alt="" />
                      </button>
                    </div>
                  </div>
                  <div
                    className={
                      "lg:flex flex-grow items-center" +
                      (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                  >
                    <ul class="lg:flex items-center justify-end	 text-base font-bold text-butterflybush-500 pt-4 lg:pt-0 right-0">
                      <li>
                        <a
                          class="lg:p-4 lg:ml-40 py-3 px-0 block border-b-2 border-transparent hover:border-blueribbon-500"
                          href="/#"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blueribbon-500"
                          href="/#"
                        >
                          Delivery
                        </a>
                      </li>
                      <li>
                        <a
                          class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-blueribbon-500"
                          href="/#"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header> */}
    </>
  );
};

export default Header;
