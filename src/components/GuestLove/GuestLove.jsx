import React from "react";
import hotel6 from "../../assets/hotel6.jpg";
import './guestLove.css'

const GuestLove = () => {
  return (
    <div className="gLove">
      <div className="gLoveItem">
        <img src={hotel6} alt="" className="gLoveImg" />
        <h2>Apart hotel Stare</h2>
        <p>City</p>
        <p>Starting from $120</p>
        <div className="gLoveRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="gLoveItem">
        <img src={hotel6} alt="" className="gLoveImg" />
        <h2>Apart hotel Stare</h2>
        <p>City</p>
        <p>Starting from $120</p>
        <div className="gLoveRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="gLoveItem">
        <img src={hotel6} alt="" className="gLoveImg" />
        <h2>Apart hotel Stare</h2>
        <p>City</p>
        <p>Starting from $120</p>
        <div className="gLoveRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="gLoveItem">
        <img src={hotel6} alt="" className="gLoveImg" />
        <h2>Apart hotel Stare</h2>
        <p>City</p>
        <p>Starting from $120</p>
        <div className="gLoveRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default GuestLove;
