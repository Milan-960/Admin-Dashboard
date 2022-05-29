import React, { useEffect, useRef } from "react";
import "./progress-bar.scss";

const PolicyProgressBar = ({ value }) => {
  const barInnersRef = useRef();

  useEffect(() => {
    barInnersRef.current.style.width = `${value}%`;
  });

  return (
    <>
      <div className="progress-bar">
        <div ref={barInnersRef} className="progress-bar__inners"></div>
      </div>
    </>
  );
};

export default PolicyProgressBar;
