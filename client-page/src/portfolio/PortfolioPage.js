import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "./portfolio-page.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";
import ExpressImg from "./res/express.png";
import MongoImg from "./res/mongo.png";
import NodeImg from "./res/node.png";
import PhpImg from "./res/php.png";
import ReactImg from "./res/react.png";
import SqlImg from "./res/sql.png";
import TailwinImg from "./res/tailwind.png";
import DbIcon from "./res/database-svgrepo-com.svg";
import LockedIcon from "./res/locked-svgrepo-com.svg";
import NetworkIcon from "./res/network-svgrepo-com.svg";
import SettingIcon from "./res/settings-svgrepo-com.svg";
import LogoGgr from "./res/logo-grg.png";
import logoSelada from "./res/selada-transparant-dark.png";
import IgIcon from "./res/instagram-svgrepo-com.svg";
import GmailIcon from "./res/gmail-svgrepo-com.svg";
import LinkedindIcon from "./res/linkedin-svgrepo-com.svg";
import ScroolIcon from "./res/up-arrow-svgrepo-com.svg";

class PortfolioPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_visible: false,
    };
  }
  state = {
    hour: null,
  };

  componentDidMount() {
    this.getHour();
    var scrollComponent = this;
    document.addEventListener("scroll", function (e) {
      scrollComponent.toggleVisibility();
    });
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({
      hour,
    });
  };
  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        is_visible: true,
      });
    } else {
      this.setState({
        is_visible: false,
      });
    }
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  render() {
    const { hour } = this.state;
    const { is_visible } = this.state;
    let jam = "";

    function detailJam() {
      if (hour <= 3) {
        jam = "Good Night Mate";
      } else if (hour <= 10) {
        jam = "Morning Mate";
      } else if (hour <= 16) {
        jam = "Afternoon Mate";
      } else if (hour <= 18) {
        jam = "Good Evening";
      } else if (hour <= 24) {
        jam = "Good Night";
      } else {
        jam = "eror";
      }
    }

    detailJam();

    return (
      <section className="font-poppins">
        <div className="back-to-top show-back-to-top">
          {is_visible && (
            <div className="top" onClick={() => this.scrollToTop()}>
              <img
                src={ScroolIcon}
                alt=""
                className="max-w-[30px] mx-[9px] my-[9px]"
              />
            </div>
          )}
        </div>
        <div className="mx-auto">
          <div className="flex flex-wrap items-center justify-center h-screen p-10">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h2 className="text-6xl font-bold ml-3">{jam}</h2>
              <hr className="border-t-2 mt-7 max-w-md" />

              <h3 className="md:text-base lg:text-base xl:text-lg mt-4 ml-3">
                Choose what you like to see{" "}
                <span className="block">and enjoy your visit</span>
              </h3>

              <p className="text-sm ml-3 mt-10">
                By{" "}
                <a
                  href="https://www.instagram.com/bdisan_/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold hover:font-extrabold ease-in-out text-black"
                >
                  Budi Setyawan
                </a>
              </p>
            </div>
            <div className="text-center w-full place-self-center px-4 lg:w-1/2">
              <div className="mt-10 max-w-full mx-auto lg:max-w-1/2">
                <OwlCarousel
                  className="owl-carousel "
                  margin={5}
                  dots={false}
                  rewind={true}
                >
                  <div className="">
                    <a href="#product">
                      <div className="card bg-product xl:max-w-[190px] xl:max-h-[190px]">
                        <div className="card__overlay"></div>
                        <div className="card__info">
                          <div className="card__title md:text-base lg:text[18px] xl:text-[28px]">
                            Product
                          </div>
                          <div className="card__text md:text-[10px] lg:text-[15px] xl:text-[15px]">
                            What is going on now?
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="">
                    <a href="#profile">
                      <div className="card bg-profile-card xl:max-w-[190px] xl:max-h-[190px]">
                        <div className="card__overlay"></div>
                        <div className="card__info">
                          <div className="card__title md:text-base lg:text[18px] xl:text-[28px]">
                            Profile
                          </div>
                          <div className="card__text md:text-[10px] lg:text-[15px] xl:text-[15px]">
                            Know more about me
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="">
                    <a href="#project">
                      <div className="card card bg-project xl:max-w-[190px] xl:max-h-[190px]">
                        <div className="card__overlay"></div>
                        <div className="card__info">
                          <div className="card__title md:text-base lg:text[18px] xl:text-[28px]">
                            Project
                          </div>
                          <div className="card__text md:text-[10px] lg:text-[15px] xl:text-[15px]">
                            See some of my Mini APP
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        <div
          id="profile"
          className="p-20  bg-neutral-900 text-white bg-fixed bg-no-repeat bg-profile"
        >
          <div className="w-full p-10">
            <div className="mx-auto text-center max-w-md">
              <p className="font-latin text-6xl pb-6">Budi Setyawan</p>
              <span className="pt-2">
                I am a young person who has an interest and talent in
                programming, especially web programming, I use MERN Stack
                technology in building a website
              </span>
            </div>
          </div>
        </div>
        <div className="grid place-items-center h-screen ">
          <div className="my-auto">
            <div className="w-full ">
              <div className="mx-auto text-center max-w-md">
                <h2 className="font-bold text-2xl">Technology I Use</h2>
                <p className="mt-3">
                  I don't limit myself to any technology, I will learn
                  everything while I can
                </p>
              </div>
            </div>
            <div className="w-full pb-10 px-20"></div>

            <div className="w-full">
              <div className="flex flex-wrap item-center justify-center px-10">
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="max-w-[350px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                  <img src={TailwinImg} alt="tailwind" />
                </a>
                <a
                  href="http://expressjs.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 max-w-[200px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                  <img src={ExpressImg} alt="express" />
                </a>
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="-mt-4 max-w-[230px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                  <img src={MongoImg} alt="mongo" />
                </a>
                <a
                  href="https://nodejs.org/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="-mt-5 max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                  <img src={NodeImg} alt="node" />
                </a>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="-mt-7 max-w-[100px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                  <img src={ReactImg} alt="react" />
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="-mt-3 max-w-[100px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                  <img src={SqlImg} alt="sql" />
                </a>
                <a
                  href="https://www.php.net/"
                  target="_blank"
                  rel="noreferrer"
                  className="max-w-[100px] mx-4 py-4 grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"
                >
                  <img src={PhpImg} alt="php" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="project" className="mx-auto bg-fixed bg-no-repeat bg-project">
          <div className="flex flex-wrap items-center justify-center h-screen p-10">
            <div className=" self-center px-4 lg:w-1/4"></div>
            <div className=" w-full mx-auto lg:w-3/4">
              <div className="pb-10 md:pl-5 xl:pl-[270px]">
                <span className="text-2xl font-bold">My Own Projects</span>
                <span className="block font-normal mt-3">
                  Feel free to see my own project
                </span>
              </div>
              <div className="text-center">
                <div className="uk-margin"></div>
                <div className="">
                  <OwlCarousel className="owl-carousel owl-theme" margin={20}>
                    <Link to="/crud-mern">
                      <div className="">
                        <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
                          <img
                            src={DbIcon}
                            alt=""
                            className="max-w-[50px] mx-auto"
                          />
                          <h3 className="text-[10px] pt-3">
                            Basic CRUD System
                            <span className="block font-semibold ">
                              MERN Stack
                            </span>
                          </h3>
                        </div>
                      </div>
                    </Link>
                    <div className="">
                      <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
                        <img
                          src={LockedIcon}
                          alt=""
                          className="max-w-[50px] mx-auto"
                        />
                        <h3 className="text-[10px] pt-3">
                          Login & Register
                          <span className="block font-semibold ">
                            MERN Stack
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div className="">
                      <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
                        <img
                          src={NetworkIcon}
                          alt=""
                          className="max-w-[50px] mx-auto"
                        />
                        <h3 className="text-[10px] pt-3">
                          Data Chart
                          <span className="block font-semibold ">
                            MERN Stack & API
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div className="">
                      <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
                        <img
                          src={SettingIcon}
                          alt=""
                          className="max-w-[50px] mx-auto"
                        />
                        <h3 className="text-[10px] pt-3">
                          Poliklinik
                          <span className="block font-semibold ">
                            PHP & MySQL
                          </span>
                        </h3>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="product" className="h-screen">
          <div className="w-full pl-20 pr-20 pb-20 pt-40">
            <div className="mx-auto text-center max-w-md">
              <span className="text-2xl font-bold">Product</span>
              <span className="block font-normal mt-3">This is my client</span>
            </div>
            <div className="ml-auto mr-auto text-center">
              <OwlCarousel className="owl-carousel owl-theme" margin={20}>
                <div className="">
                  <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
                    <img
                      src={logoSelada}
                      alt=""
                      className="max-w-[150px] grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 ml-auto mr-auto"
                    />
                    <h3 className="text-[0px] sm:text-[0px] md:text-[0px] lg:text-[12px] xl:text-[12px] pt-3">
                      SELADA is an integrated business system in the s-pay
                      device that helps you manage your business to face
                      competition in the 4.0 era
                    </h3>
                  </div>
                </div>
                <div className="">
                  <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
                    <img
                      src={LogoGgr}
                      alt=""
                      className="max-w-[70px] grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 ml-auto mr-auto"
                    />
                    <h3 className="text-[0px] sm:text-[0px] md:text-[0px] lg:text-[12px] xl:text-[12px] pt-3">
                      Uncle George Revenge (GRG) is a fashion brand that was
                      founded in Bandung, Indonesia
                    </h3>
                  </div>
                </div>
                <div className="">
                  <div className="uk-card uk-card-primary uk-card-hover uk-card-body uk-light">
                    <h1 className="font-bold text-[10px] sm:text-[10px] md:text-[20px] lg:text-[32px] xl:text-[32px] grayscale opacity-60 transition duration-500 hover:grayscale-0 hover:opacity-100 ml-auto mr-auto">
                      Coming Soon
                    </h1>
                    <h3 className="text-[0px] sm:text-[0px] md:text-[0px] lg:text-[12px] xl:text-[12px] pt-3">
                      Here <span className="block">Coming Soon</span>
                    </h3>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900">
          <div className="w-full pl-20 pr-20 pb-20 pt-20">
            <div className="mx-auto text-center max-w-md text-white">
              <span className="text-2xl font-bold">Get in touch with me</span>
              <span className="block font-normal mt-3">
                Just saying hi, no problem or just discussing a website project,
                that's okay just hit the button below
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center pt-3">
              <a
                href="mailto:bs195104@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <img src={GmailIcon} alt="gmail" />
              </a>
              <a
                href="https://www.instagram.com/bdisan_/"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <img src={IgIcon} alt="instagram" />
              </a>
              <a
                href="https://id.linkedin.com/in/budi-setyawan-b98459242"
                target="_blank"
                rel="noreferrer"
                className="p-2"
              >
                <img src={LinkedindIcon} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PortfolioPage;
