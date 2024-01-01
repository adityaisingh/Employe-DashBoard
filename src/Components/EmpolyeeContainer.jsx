import React from "react";
import { useState, useEffect } from "react";

const API = "https://jsonplaceholder.typicode.com/users";

const EmpolyeeContainer = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(API);
    const json = await response.json();
    console.log(json);
    setData(json.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return <></>;
};

export default EmpolyeeContainer;
