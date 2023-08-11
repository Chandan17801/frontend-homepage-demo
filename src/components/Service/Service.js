import React from "react";
import service from "../../images/order 1.png";
import service1 from "../../images/delivery 1.png";
import service2 from "../../images/courier 1.png";

function Service() {
  return (
    <div className="w-1/2 my-10 m-auto text-center">
      <div className="font-medium text-yellow-400">How it works</div>
      <div className="font-bold my-1 text-2xl">What we serve</div>
      <div>
        Product Quality Is Our Priority, And Always Guarantees Halal And Safety
        Until It Is In Your Hands.
      </div>
      <div className="flex h-64 gap-10 justify-center items-center">
        <div>
          <img src={service} className="h-36 m-auto" alt="" />
          <div className="font-medium">Easy To Order</div>
          You only order through the app
        </div>
        <div>
          <img src={service1} className="h-36 m-auto" alt="" />
          <div className="font-medium">Fastest Delivery</div>
          Delivery will be on time
        </div>
        <div>
          <img src={service2} className="h-36 m-auto" alt="" />
          <div className="font-medium">Best Quality</div>
          The best quality of food for you
        </div>
      </div>
    </div>
  );
}

export default Service;
