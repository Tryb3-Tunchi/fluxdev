"use client";

import Link from "next/link";

const Header = () => {
  const darkMode = () => {
    const body = document.querySelector(".darkmode");

    if (body.classList.contains("light")) {
      body.classList.add("dark");
      body.classList.remove("light");
    } else {
      body.classList.remove("dark");
      body.classList.add("light");
    }
  };

  return (
    <div className="">
      <div className="header bg-mode z-10  top-1 w-full shadow-lg  flex justify-between items-center py-4 opacity-100">
        <div className="logo flex items-center mx-6">
          <img src="./logo.png" alt="" />{" "}
          <p className="text-2xl pt-2 font-semibold text-blue-700 pl-2">
            Fluxdevs
          </p>
        </div>
        <div className="menu md:block hidden">
          <ul className="flex">
            <li className="ml-6">Home</li>
            <li className="mx-2">
              <Link href="./About"> About us</Link>
            </li>
            <li className="mx-2">Services</li>
            <li className="mr-6">Our Projects</li>
          </ul>
        </div>
        <div>
          <button
            onClick={darkMode}
            className="bg-transparent rounded-md text-white mx-2"
          >
            🌙
          </button>
          <button className="bg-blue-500 px-2 py-1 rounded-md text-slate-100 mx-2 ml-6">
            <Link href="./About">About us</Link>
          </button>
        </div>
      </div>

      <div className="bg-bmode hidden w-2/4 h-full fixed top-0 right-0  ">
        <div className=" m-4 flex items-center">
          <button onClick={darkMode} className="p-2 bg-blue-400 rounded-lg">
            mode
          </button>
        </div>
        <ul className=" pt-10 text-4xl text-left ml-10">
          <li>Home</li>
          <li className="py-4">About us</li>
          <li className="pb-4">Services</li>
          <li>Our Projects</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
