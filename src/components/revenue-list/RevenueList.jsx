import React from "react";
import { data } from "../../constants";
import "./revenue-list.scss";
import ClaimProgressBar from "../progressbar/ClaimProgressBar";
import PolicyProgressBar from "../progressbar/PolicyProgressBar";

const RevenueList = () => {
  return (
    <>
      <ul className="revenue-list">
        {data.revenueByChannel.map((item, index) => (
          <li className="revenue-list__item" key={`revenue-${index}`}>
            <div className="revenue-list__item__title">
              {item.title}
              <p className="value">
                <span>$</span>
                <span>{item.subtitle}</span>
              </p>
            </div>
            <div>
              <ClaimProgressBar value={item.value} />
            </div>
          </li>
        ))}
      </ul>
      <ul className="revenue-list">
        {data.revenueByClaim.map((item, index) => (
          <li className="revenue-list__item" key={`revenue-${index}`}>
            <div className="revenue-list__item__title">
              {item.title}
              <p className="value">
                <span>$</span>
                <span>{item.subtitle}</span>
              </p>
            </div>
            <div>
              <PolicyProgressBar value={item.value} />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RevenueList;
