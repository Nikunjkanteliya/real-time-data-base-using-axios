import React from "react";
import style from "./https/style/Ui.module.css";
const Ui = (props) => {
  return (
    <div>
      <ul>
        <li className={`${style.li}`}> {props.name}</li>
      </ul>
    </div>
  );
};

export default Ui;
