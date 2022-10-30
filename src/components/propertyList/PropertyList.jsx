import React from "react";
import hotel1 from "../../assets/hotel1.jpg";
import hotel2 from "../../assets/hotel2.jpg";
import hotel3 from "../../assets/hotel3.jpg";
import hotel4 from "../../assets/hotel4.jpg";
import hotel5 from "../../assets/hotel5.jpg";
import hotel6 from "../../assets/hotel6.jpg";
import './propertyList.css'

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={hotel1} alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Title</h1>
          <h2>properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel2} alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Title</h1>
          <h2>properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel3} alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Title</h1>
          <h2>properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel4} alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Title</h1>
          <h2>properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel5} alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Title</h1>
          <h2>properties</h2>
        </div>
      </div>
      <div className="pListItem">
        <img src={hotel6} alt="" className="pListImg" />
        <div className="pListTitle">
          <h1>Title</h1>
          <h2>properties</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
