import React from "react";
import manImg from "../Assets/man.png";

const EmployeCard = ({ data, setShowData }) => {
  const handleDelete = (data) => {
    // console.log(data);
    // Create a new array excluding the item with the specified ID
    const updatedData = setShowData((prevData) =>
      prevData.filter((item) => item.id !== data.id)
    );
    // Update the state with the new array
    // setShowData(updatedData);
  };
  return (
    <div className="cards">
      <div className="userImg">
        <img className="imgUser" src={manImg} />
        <h4 className="name">
          {data.id}. {data.name}
        </h4>
      </div>
      <div className="info">
        <div className="email">
          <h4 className="emailicon">
            <i class="fa-regular fa-envelope"></i>
            {data.email}
          </h4>
        </div>

        <div className="number">
          <h4 className="numicon">
            <i class="fa-solid fa-phone"></i> {data.phone}
          </h4>
        </div>
      </div>

      <div className="Cardbtn">
        <button className="edit">Edit</button>
        <button className="del" onClick={() => handleDelete(data)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeCard;
