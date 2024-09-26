import React from "react";
import Hero from "../components/Hero";
import BoatRental from "../components/BoatRental";
import Featured from "../components/Featured";
import CustomerSaying from "../components/CustomerSaying";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="md:mt-36 mt-24 container mx-auto mb-10">
        <BoatRental></BoatRental>
      </div>

      <div className=" ">
        <div className="md:mt-36 mt-24 lg:p-5 p-3 bg-transparent container mx-auto ">
         <div>
         <Featured></Featured>
         </div>
        </div>
      </div>
      <div className="md:mt-36 mt-24 container mx-auto ">
        <CustomerSaying></CustomerSaying>
      </div>
    </div>
  );
};

export default Home;
