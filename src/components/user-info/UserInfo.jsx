import React from "react";
import "./user-info.scss";

import avatar from "../../assets/images/av.png";

const UserInfo = () => {
  return (
    <div className="user-info">
      <img className="user__avatar" src={avatar} alt="avatar" />
      <h1>Hello ! Rusalba Ruiz</h1>
      <p>Welcome Back To Your Insurance Portal</p>
      <p>
        Your Plan :<span>Free</span>
      </p>
      <div className="plan">
        <button className="button__plan">
          Create New Plan <span>+</span>
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
