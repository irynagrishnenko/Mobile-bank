import "./index.css";
import React from "react";

type StatusBarProps = {
  color: "white" | "black";
};

export const StatusBar: React.FC<StatusBarProps> = ({ color }) => {
  let src = "";

  if (color === "white") {
    src = "./../svg/status-bar-white.svg";
  } else if (color === "black") {
    src = "./../svg/status-bar-black.svg";
  }

  return <img src={src} alt="Status bar" className="status-bar" />;
};
