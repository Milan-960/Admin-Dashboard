import React, { useEffect, useState } from "react";

import "./topnav.scss";

import { Link, useLocation } from "react-router-dom";

import topbarNav from "../../configs/topbarNav";

const TopNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = topbarNav.findIndex((item) => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const openSidebar = () => {
    document.body.classList.add("sidebar-open");
  };

  return (
    <div className="topnav">
      <div className="topnav__menu">
        {topbarNav.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`topnav__menu__item ${
              activeIndex === index && "active"
            }`}
          >
            <div className="topnav__menu__item__txt">{nav.text}</div>
          </Link>
        ))}
      </div>
      <div className="sidebar-toggle" onClick={openSidebar}>
        <i className="bx bx-menu-alt-right"></i>
      </div>
    </div>
  );
};

export default TopNav;
