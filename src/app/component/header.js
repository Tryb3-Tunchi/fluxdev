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
      <div className="header      z-10  top-1 w-full shadow-lg  flex justify-between items-center py-4 opacity-100">
        <div className="logo mx-6">Logo</div>
        <div className="menu sm:block hidden">
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
            contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
