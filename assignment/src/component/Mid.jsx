import React from "react";
import Ui from "./Ui";

const Mid = (props) => {
  return (
    <div>
      {props.namedata.map((ele) => {
        return <Ui key={ele.id} name={ele.namedigikull} />;
      })}
    </div>
  );
};

export default Mid;
