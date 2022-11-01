import React from "react";
import "./home.css";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import GuestLove from "../../components/GuestLove/GuestLove";

const Home = () => {
  return (
    <div className="homeContainer">
      <Featured />
      <h1 className="homeTitle">Browse By Property</h1>
      <PropertyList />
      <h1 className="homeTitle">Home Guest Love</h1>
      <GuestLove />
    </div>
  );
};

export default Home;
