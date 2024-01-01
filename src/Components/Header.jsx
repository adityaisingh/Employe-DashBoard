import React from "react";

const Header = () => {
  return (
    <>
      <div className="Container">
        <div className="lg">Dashboard</div>
        <div>
          <input className="Search" type="text" placeholder="Search Here..." />
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
