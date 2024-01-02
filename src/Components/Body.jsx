import React from "react";
import { useState, useEffect } from "react";
import EmployeCard from "./EmployeCard";

const API = "https://jsonplaceholder.typicode.com/users";

const Body = ({ data, setData, showData, setShowData }) => {
  const getData = async () => {
    const response = await fetch(API);
    const json = await response.json();
    console.log(json);
    setData(json);
    setShowData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cardContainer">
      {showData &&
        showData.map((data) => (
          <li key={data.id}>
            <EmployeCard data={data} {...{ setShowData, showData }} />
          </li>
        ))}
    </div>
  );
};

export default Body;
