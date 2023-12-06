import React from "react";

const TextError = (props) => {
  console.log(props);
  return <div className="text-red text-center  mb-2">{props.children}</div>;
};

export default TextError;
