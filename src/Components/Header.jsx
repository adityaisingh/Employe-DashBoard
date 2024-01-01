import React from "react";

const Header = () => {
  return (
    <>
      <div className="Container">
        <div className="lg">Dashboard</div>
        <div>
          <input className="Search" type="text" placeholder="Search Here..." />
          <button className="btn">Search</button>
        </div>
        <div className="items">
          <h4>Home</h4>
          <h4>Support</h4>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIaRG7GKLjgdSQhQXfL4UY13Zl-m6XJmqT5khO4dGHbIrSbI84dCFjCIw9IA&s"
            alt="user"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
