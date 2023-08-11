import React from "react";
import dish from "../../images/img-hero.png";

function Hero() {
  return (
    <div className="h-96 w-full flex bg-yellow-50">
      <div className="h-auto w-8/12 p-6 text-center">
        <div className="text-5xl font-semibold w-1/2 m-auto my-5">
          Be The Fastest In Delivery Your Food
        </div>
        <div className="font-light w-2/5 m-auto my-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet
        </div>
        <div className="bg-yellow-400 p-1 text-xl w-32 m-auto cursor-pointer rounded-2xl">
          Get Started
        </div>
      </div>
      <img src={dish} className="p-2" alt="dish"></img>
    </div>
  );
}

export default Hero;
