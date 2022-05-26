import React from "react";
import "./summary-box.scss";
import Box from "../box/Box";
import RevenueList from "../revenue-list/RevenueList";

const SummaryBox = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info">
          <div className="summary-box__info__title">
            <div className="summary__box__title">
              {item.title} <p className="summary__amount">$</p>
            </div>
          </div>
          <span>{item.subtitle}</span>
          <RevenueList />
        </div>
      </div>
    </Box>
  );
};

export default SummaryBox;
