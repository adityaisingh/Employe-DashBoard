import React, { useState } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";

const App = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(data);
  return (
    <div>
      <Header {...{ data, setData, showData, setShowData }} />
      <Body {...{ data, setData, showData, setShowData }} />
    </div>
  );
};

export default App;
