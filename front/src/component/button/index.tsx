import React from "react";
import "./index.css";

export const Button = ({ children, isSecondary }: any) => {
  return (
    <div
      className={`button 
      ${isSecondary && "button--secondary"} `}
    >
      {children}
    </div>
  );
};
