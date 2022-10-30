import React from "react";
import "./home.css";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";

const Home = () => {
  return (
    <div className="homeContainer">
      <Featured />
      <h1 className="homeTitle">Browse By Property</h1>
      <PropertyList />
    </div>
  );
};

export default Home;
