import React from "react";
import LogoFull from "../../assets/images/tania_logo4.svg";

//style
import "./Header.scss";

const Header = () => {
  const menus = [
    {
      name: "Home",
      icon: "About Me",
      path: "#Home",
    },
    {
      name: "About me",
      icon: "About Me",
      path: "#About-me",
    },
    {
      name: "Showcase",
      icon: "",
      path: "#Showcase",
    },
    {
      name: "Contact",
      icon: "",
      path: "#Contact",
    },
  ];

  return (
    <header className="sticky">
      <img src={LogoFull} alt="TaniaCode" className="logo" />
      <ul>
        {menus.map((item, index) => (
          <li key={index}>
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
