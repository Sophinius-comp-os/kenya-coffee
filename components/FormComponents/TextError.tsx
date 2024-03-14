import React from "react";

interface TextErrorProps {
  children:React.ReactNode
}
const TextError = ({children}:TextErrorProps) => {
  //console.log(props);
  return <div className="text-red text-center  mb-2">{children}</div>;
};

export default TextError;
