import React from "react";
import image from "../images/Group 7.png";
import user from "../images/user.png";

function Testimonial() {
  return (
    <div className="w-1/2 h-64 m-auto my-10 flex">
      <img src={image} alt="" />
      <div className="text-center p-5">
        <div className="px-12 m-auto">
          <div className="font-medium text-yellow-300">What the say</div>
          <div className="font-bold text-xl">
            What Our Customers Say About Us
          </div>
          <div className="h-32 w-80 p-2 bg-slate-300 rounded-xl m-5">
            <img src={user} className="h-10" alt="" />
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis.”
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
