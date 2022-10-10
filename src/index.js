import React from "react";
import ReactDOM from "react-dom/client";

import './global.css';

// import App
import App from "./App";

const rootId = document.getElementById("root");
const root = ReactDOM.createRoot(rootId);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
