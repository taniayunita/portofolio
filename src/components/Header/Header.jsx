import React from "react";
import LogoFull from "../../assets/images/tania_logo4.svg";

//style
import "./Header.scss";

const Header = () => {
  const menus = [
    {
      name: "Home",
      icon: "About Me",
    },
    {
      name: "About me",
      icon: "About Me",
    },
    {
      name: "Showcase",
      icon: "",
    },
    {
      name: "Contact",
      icon: "",
    },
  ];

  return (
    <header>
      <img src={LogoFull} alt="TaniaCode" className="logo" />
      <ul>
        {menus.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
