import React from "react";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import { IoMdList } from "react-icons/io";
import { IoIosBrush } from "react-icons/io";
import "./menu.css";

function Menu(props) {
  return (
    <div className="menu">
      <Link to="/Koodilaskuri">
        <button className="nappi">
          <IoMdList />{" "}
        </button>
      </Link>
      <Link to="./ItemForm">
        {" "}
        <div className="nappi">
          {" "}
          <IoIosAdd />
        </div>
      </Link>
      <Link to="/Graafi">
        {" "}
        <div className="nappi">
          {" "}
          <IoIosBrush />{" "}
        </div>
      </Link>
    </div>
  );
}

export default Menu;
