import React, { useState } from "react";

const Header = ({ data, setData, showData, setShowData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // const showData = data;

  const handleSearch = (e) => {
    const query = e.target.value;

    setSearchQuery(query);

    // Filter the data based on the search query
    const filteredData = data.filter(
      (item) => item.id.toString().includes(query) // Assuming id is a number; convert to string for comparison
    );

    console.log(filteredData);

    // Update the state with the filtered data
    // setData(filteredData);
    setShowData(filteredData);
  };

  return (
    <>
      <div className="Container">
        <div className="lg">Dashboard</div>
        <div>
          <input
            className="Search"
            type="text"
            placeholder="Search Here..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button className="btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="items">
          <h4>Home</h4>
          <h4>Support</h4>
          <i class="fa-regular fa-user"></i>
        </div>
      </div>
    </>
  );
};

export default Header;
