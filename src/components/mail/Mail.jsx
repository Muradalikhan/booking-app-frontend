import React from "react";
import "./mail.css";

const Mail = () => {
  return (
    <div className="mail">
      <h2 className="mailTitle">Save time, save money!</h2>
      <span className="mailDesc">sign up and we will send you a request</span>
      <div className="mailInputContainer">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Mail;
