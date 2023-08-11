import React from "react";
import soup from "../images/food 2.png";

function Footer() {
  return (
    <div className="h-72 w-full bg-yellow-50 px-24">
      <div className="my-10 flex  justify-center ">
        <div className="mx-12">
          <div className="w-40 h-12 font-semibold text-xl flex my-4">
            Let’sFood
            <img className="mx-1 h-8" src={soup} alt="d" />
          </div>
          <p>Jalan Semangka Raya, Telaga </p>
          <p>Murni,Cikarang Barat, Kab. Bekasi</p>
        </div>
        <div className="mx-8">
          <div className="w-40 h-12 font-semibold text-xl flex my-4">
            Company
          </div>
          <p>About Us</p>
          <p>Career</p>
          <p>How It Work</p>
        </div>
        <div className="mx-8">
          <div className="w-40 h-12 font-semibold text-xl flex my-4">
            Policy
          </div>
          <p>FAQ</p>
          <p>Privacy</p>
          <p>Shipping</p>
        </div>
        <div className="mx-8">
          <div className="w-40 h-12 font-semibold text-xl flex my-4">
            Get In Touch
          </div>
          <p>+62 896 7311 2766</p>
          <p>food@example.com</p>
        </div>
      </div>
      <hr />
      <h5 className="my-5 text-center">
        © 2022 Let’sFood. ALL RIGHT RESERVED.
      </h5>
    </div>
  );
}

export default Footer;
