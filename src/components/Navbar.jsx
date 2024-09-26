import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 justify-between items-center  text-white">
      <div>
        <img src="https://i.ibb.co.com/6ZrMpcY/logo-t-w.png" alt="" />
      </div>
      <div>
        <ul className="flex flex-col md:flex-row justify-between items-center gap-5">
          <li  className="font-bold hover:text-[#3bc9e2]">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="font-bold hover:text-[#3bc9e2]">
            <Link to={"/filter"}>Task-3  filter</Link>
          </li>
          <li className="font-bold hover:text-[#3bc9e2]">
            <Link to={"https://66f3c0b8405934ec5a1b455c--nimble-capybara-fd5dbe.netlify.app/"}>Redirect to task 1</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
