import React from "react";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import './featured.css'

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src={img1} alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Title</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img2} alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Title</h1>
          <h2>123 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img3} alt="" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Title</h1>
          <h2>123 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
