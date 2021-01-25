import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DataProvider from "context/Data";
import Home from "components/views/Home";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <Home />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
