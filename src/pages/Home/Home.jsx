import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

//style
import "./Home.scss";

//asset
import ImageHomeRight from "../../assets/images/Group2373.png";
import ImageHomeLeft from "../../assets/images/Vector187.png";
import DownloadIcon from "../../assets/icons/download.png";

import ImageAboutRight from "../../assets/images/Group2374.png";
import ImageSong from "../../assets/images/Vector141.png";
import ImageLamp from "../../assets/images/lightbulb.png";
import ImageArrow from "../../assets/images/Vector186.png";

import ImageWebsite from "../../assets/images/Course.png";
import ImageLaptop from "../../assets/images/Group33.png";
import ImageHp from "../../assets/images/Group.png";

import ImageContact from "../../assets/images/Group2376.png";
import ImageKeyboard from "../../assets/images/keyboard.png";
import ImageMail from "../../assets/images/mail.png";
import SendIcon from "../../assets/icons/send.png";

const Home = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  return (
    <div className="">
      <Header />
      <main>
        <section className="home" id="Home">
          <div className="content-left">
            <img src={ImageHomeLeft} alt="" className="image-arrow" />
            <div className="title">
              <p>
                REACTJS <span>DEVELOPER</span>
              </p>
              <div className="btn-action">
                <button className="btn btn-hire">Hire me</button>
                <button className="btn btn-download">
                  Download CV <img src={DownloadIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="content-right">
            <img src={ImageHomeRight} alt="ilustration" />
          </div>
        </section>
        <section className="about" id="About-me">
          <div className="content-left">
            <img src={ImageSong} alt="" className="top" />
            <div className="mid">
              <div>
                <p className="title">
                  About <span>me</span>
                </p>
                <img src={ImageLamp} alt="" />
              </div>
              <p>
                Hello... My name is Tania Yunita, you can call me Tania, I am
                Frontend Developer especially in ReactJS, i have ability using
                HTML, CSS, Javascript, Typescript, fetching data from API, and
                state management like Redux.... Read more
              </p>
            </div>
            <img src={ImageArrow} alt="" className="bottom" />
          </div>
          <div className="content-right">
            <img src={ImageAboutRight} alt="illustration" />
          </div>
        </section>
        <section className="showcase" id="Showcase">
          <p>
            My Recent <span>Projects</span>
          </p>
          <div className="badge-container">
            <div className="badge active">All</div>
            <div className="badge ">UI</div>
            <div className="badge ">UX</div>
            <div className="badge ">React</div>
          </div>
          <div className="projects-container">
            <div className="card">
              <img src={ImageWebsite} alt="" />
            </div>
            <div className="card">
              <img src={ImageLaptop} alt="" />
            </div>
            <div className="card">
              <img src={ImageHp} alt="" />
            </div>
          </div>
        </section>
        <section className="contact" id="Contact">
          <div className="content-left">
            <p>
              Got a project in <span>mind?</span>
            </p>
            <img src={ImageContact} alt="illustration" />
          </div>
          <div className="content-right">
            <img className="top" src={ImageKeyboard} alt="" />
            <div className="mid">
              <div className="name-input">
                <div className="input-field">
                  <label>your name</label>
                  <input placeholder="Name" />
                </div>
                <div className="input-field">
                  <label>your email</label>
                  <input placeholder="Email" />
                </div>
              </div>
              <div className="input-field">
                <label>your message</label>
                <textarea placeholder="Message" />
              </div>
              <button>
                Send message <img src={SendIcon} alt="" />
              </button>
            </div>
            <img className="bottom" src={ImageMail} alt="" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
