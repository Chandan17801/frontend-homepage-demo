import React from "react";
import card from "../images/unsplash_G6wx5j5-dR8.png";
import card1 from "../images/unsplash_SqYmTDQYMjo.png";
import card2 from "../images/unsplash_vg2p2BK57bY.png";
import card3 from "../images/unsplash_zBONkjGFGko.png";

function Menu() {
  return (
    <div className="w-1/2 my-10 m-auto text-center ">
      <div className="font-medium text-yellow-400">Our Menu</div>
      <div className="font-bold my-1 text-2xl">Our Popular Menu</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
      </div>
      <div className="flex h-64 justify-center gap-4">
        <div className="my-8 w-36 shadow">
          <div className="h-2/3 bg-slate-300 flex justify-center">
            <img src={card} alt="" />
          </div>
          <p className="text-xs font-semibold">Mie Raman</p>
          <p className="text-xs ">Lorem</p>$ 20.2
        </div>
        <div className="my-8 w-36 shadow">
          <div className="h-2/3 bg-slate-300 flex justify-center">
            <img src={card3} alt="" />
          </div>
          <p className="text-xs font-semibold">Salad Tahu</p>
          <p className="text-xs ">Lorem</p>$ 20.2
        </div>
        <div className="my-8 w-36 shadow">
          <div className="h-2/3 bg-slate-300 flex justify-center">
            <img src={card1} alt="" />
          </div>
          <p className="text-xs font-semibold">Roti Baker</p>
          <p className="text-xs ">Lorem</p>$ 20.2
        </div>
        <div className="my-8 w-36 shadow">
          <div className="h-2/3 bg-slate-300 flex justify-center">
            <img src={card2} alt="" />
          </div>
          <p className="text-xs font-semibold">Spaghetti</p>
          <p className="text-xs ">Lorem</p>$ 20.2
        </div>
      </div>
      <div className="my-5 bg-yellow-400 text-xl w-32 m-auto p-0.5 rounded-2xl cursor-pointer">
        More Menu
      </div>
    </div>
  );
}

export default Menu;
