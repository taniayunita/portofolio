import React from "react";

//style
import "./Footer.scss";

import HomeIcon from "../../assets/icons/home.png";
import PhoneIcon from "../../assets/icons/phone.png";
import UserIcon from "../../assets/icons/user.png";
import LinkedIcon from "../../assets/icons/linkedin.svg";
import InstaIcon from "../../assets/icons/instagram.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";
import TwitterIcon from "../../assets/icons/twitter.svg";

const Footer = () => {
  const socials = [
    {
      icon: LinkedIcon,
      path: "https://www.linkedin.com/in/tania-yunita-b6869b222/",
    },
    {
      icon: InstaIcon,
      path: "https://www.instagram.com/pikachu.chacha/",
    },
    {
      icon: TwitterIcon,
      path: "https://twitter.com/taniayunita22?t=jKtl0h-WoxrxMiB6bu14yw&s=09",
    },
    {
      icon: YoutubeIcon,
      path: "https://www.youtube.com/channel/UCtce_BY6BJ_d7g4wkOyxaZg",
    },
  ];

  const menus = [
    {
      icon: HomeIcon,
      title: "Home",
      path: "#Home",
    },
    {
      icon: UserIcon,
      title: "About me",
      path: "#About-me",
    },
    {
      icon: PhoneIcon,
      title: "Contact",
      path: "#Contact",
    },
  ];
  return (
    <footer>
      <div className="menu-container">
        {menus.map((item, index) => (
          <a key={index} className="menu" href={item.path} target='_blank'>
            <img src={item.icon} alt="" />
            <p>{item.title}</p>
          </a>
        ))}
      </div>
      <div className="social-container">
        {socials.map((item, index) => (
          <a className="social" href={item.path} key={index} target='_blank'>
            <img src={item.icon} alt="" />
          </a>
        ))}
      </div>
      <a href="https://www.figma.com/@sauldesigns" className="credit">
        UI Design by <span>Saul Design</span>{" "}
      </a>
    </footer>
  );
};

export default Footer;
