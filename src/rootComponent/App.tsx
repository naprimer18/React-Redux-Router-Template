import React from "react";
import { Routes } from "../routes";

export const App: React.FC = () => {
  console.log(`API_URL' ${process.env.REACT_APP_API_URL}`);

  return (
    <div className="App">
      <Routes />
    </div>
  );
};
