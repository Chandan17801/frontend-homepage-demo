import React from "react";

function NavItem(props) {
  const clickHandler = () => {
    props.onClick(props.text);
  };
  return (
    <div
      className={`cursor-pointer ${
        props.text === props.sel ? "border-b-4 border-yellow-500" : ""
      }`}
      onClick={clickHandler}
    >
      {props.text}
    </div>
  );
}

export default NavItem;
