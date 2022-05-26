import React, { useEffect, useState } from "react";
import "./topnav.scss";
import { Link, useLocation } from "react-router-dom";
// import { images } from "../../constants";
import topbarNav from "../../configs/topbarNav";

const TopNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = topbarNav.findIndex((item) => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  //   const closetopbarNav = () => {
  //     document.querySelector(".main__content").style.transform =
  //       "scale(1) translateX(0)";
  //     setTimeout(() => {
  //       document.body.classList.remove("topbarNav-open");
  //       document.querySelector(".main__content").style = "";
  //     }, 500);
  //   };

  return (
    <div className="topbarNav">
      {topbarNav.map((nav, index) => (
        <Link
          to={nav.link}
          key={`nav-${index}`}
          className={`topbarNav__menu__item ${
            activeIndex === index && "active"
          }`}
        >
          {/* <div className="topbarNav__menu__item__icon">{nav.icon}</div> */}
          <div className="topbarNav__menu__item__txt">{nav.text}</div>
        </Link>
      ))}
    </div>
  );
};

export default TopNav;
