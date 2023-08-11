import React, { useState } from "react";
import NavItem from "./NavItem";

import soup from "../../images/food 2.png";
import frame from "../../images/Frame 1.png";
import search from "../../images/Group.png";
import cart from "../../images/heroicons-solid_shopping-cart.png";

const nav = [
  { id: "1", text: "Home" },
  { id: "2", text: "Menu" },
  { id: "3", text: "How it works" },
  { id: "4", text: "About" },
  { id: "5", text: "Contact" },
];

function Navbar() {
  const [selected, setSelected] = useState("Home");

  const onCLickNavHandler = (data) => {
    setSelected(data);
  };

  return (
    <div className="h-24 w-full bg-yellow-50">
      <div className="absolute w-40 h-12 top-6 left-28 flex">
        <div className="font-semibold text-2xl">Let’sFood</div>
        <img className="mx-1 h-8" src={soup} alt="d" />
      </div>
      <div className="flex h-24 justify-center items-center gap-10 text-lg">
        {nav.map((data) => (
          <NavItem
            key={data.id}
            text={data.text}
            onClick={onCLickNavHandler}
            sel={selected}
          />
        ))}
      </div>
      <div className="absolute top-8 cursor-pointer right-80">
        <img src={search} alt="" />
      </div>
      <div className="absolute top-8 cursor-pointer right-60">
        <div className="relative">
          <img src={cart} alt="" />
          <div className="bg-yellow-400 absolute bottom-5 right-0 text-xs px-1 rounded-full">2</div>
        </div>
      </div>
      <div className="w-32 h-10 top-6 absolute right-10 rounded-3xl gap-4 bg-yellow-400 cursor-pointer">
        <img src={frame} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
