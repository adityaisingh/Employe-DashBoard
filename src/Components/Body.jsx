import React from "react";
import { useState, useEffect } from "react";
import EmployeCard from "./EmployeCard";

const API = "https://jsonplaceholder.typicode.com/users";

const Body = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(API);
    const json = await response.json();
    console.log(json);
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="cardContainer">
      {data.map((data) => (
        <li key={data.id}>
          <EmployeCard data={data} />
        </li>
      ))}
    </div>
  );
};

export default Body;
