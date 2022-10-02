import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { App } from "./pages";
import "antd/dist/antd.css";
import "./assets/_antd.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
