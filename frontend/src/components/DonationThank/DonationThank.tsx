import React, { useContext } from "react";
import "./DonationThank.scss";
import { ActionContext, StateContext } from "../../hooks";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import copy from "clipboard-copy";

function DonationThank() {
  const { setModalConfig } = useContext(ActionContext);
  const { selectedBusiness, user } = useContext(StateContext);
  const shareUrl = "https://www.boulderfund.com/-biznumber-refname";
  const title = "Boulder Fund Share";

  const copyShareUrl = (pValue: string) => {
    copy(pValue);
  };
  return (
    <div className="donation-thanks">
      <h2 className="donation-thanks-header top-margin-set">
        Thank you for your donation, {user.first_name} {user.last_name}!
      </h2>
      <div className="donation-thanks-company-container top-margin-set">
        <div className="donation-thanks-company-left">
          <img
            src={selectedBusiness.logo}
            alt="business logo"
            className="donation-thanks-company-logo"
          />
          <h3>{selectedBusiness.name}</h3>
        </div>
        <div className="donation-thanks-company-right">
          <p>
            "We can’t tell you what your donation means to us! Thank you for
            helping us weather the storm!"
          </p>
        </div>
      </div>
      <p className="top-margin-set">
        Please considering sharing with your friends and family! If we all pitch
        in, we can keep our community a vital and vibrant place for locally
        owned businesses in this difficult time.
      </p>
      <div className="donation-thanks-links-container top-margin-set">
        <div className="donation-thanks-links-item">
          <div className="donation-thanks-links-icon">
            <FacebookShareButton url={shareUrl} quote={title}>
              <FacebookIcon size={56} round />
            </FacebookShareButton>
          </div>
          <div>Facebook</div>
        </div>
        <div className="donation-thanks-links-item">
          <div className="donation-thanks-links-icon">
            <TwitterShareButton url={shareUrl} title={title}>
              <TwitterIcon size={56} round />
            </TwitterShareButton>
          </div>
          <div>Twitter</div>
        </div>
        <div className="donation-thanks-links-item">
          <div className="donation-thanks-links-icon">
            <img src={require("../../assets/mail.png")} alt="mail" />
          </div>
          <div>Mail</div>
        </div>
      </div>
      <div className="donation-thanks-link-copy-container top-margin-set">
        <input
          type="text"
          className="donation-thanks-link-copy-input"
          value="https://www.boulderfund.com/-biznumber-refname"
          disabled
        />
        <button
          className="donation-thanks-link-copy-button"
          onClick={(e) =>
            copyShareUrl("https://www.boulderfund.com/-biznumber-refname")
          }
        >
          Copy
        </button>
      </div>
      <p className="top-margin-set">
        Finished sharing? Scroll down to check out a few more businesses that
        need our help and please consider donating to the local small businesses
        that make living in Boulder so amazing.
      </p>
    </div>
  );
}

export default DonationThank;
