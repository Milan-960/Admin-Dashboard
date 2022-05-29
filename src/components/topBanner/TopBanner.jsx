import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./topBanner.scss";
import banner1 from "../../assets/images/banner1.png";

const TopBanner = () => {
  const [copied, setCopied] = useState(false);
  const couponValue = "NEWBIE20";

  return (
    <div className="overall-list">
      <article className="article">
        <picture className="picture">
          <source media="(min-width: 0px)" srcSet={banner1} />
          <img className="image" src={banner1} alt="background" />
        </picture>

        <div className="header">
          <h1>20% Safe On Your First Account</h1>
          <div
            className={copied ? "lucky-coupon coupon-applied" : "lucky-coupon"}
          >
            <div className="lucky-coupon-code">{couponValue}</div>
            {copied ? (
              <div className="coupon-copied">Copied!</div>
            ) : (
              <CopyToClipboard
                text={couponValue}
                onCopy={() => setCopied(true)}
              >
                <div className="copy-code">Copy Code</div>
              </CopyToClipboard>
            )}
          </div>
        </div>
      </article>
    </div>
  );
};

export default TopBanner;
