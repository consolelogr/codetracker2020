import React from "react";
import "./add.css";
import ItemForm from "../ItemForm/ItemForm";

function Add(props) {
  console.log("// Add - props:", props.onFormSubmit);

  return (
    <ItemForm onFormSubmit={props.handleSubmit} /> // -->App.js
  );
}

export default Add;
