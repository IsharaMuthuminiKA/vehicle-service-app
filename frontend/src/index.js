import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";   // ✅ CSS import (important)
import App from "./App"; // ✅ App import

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />   {/* ✅ ONLY App render කරන්න */}
  </React.StrictMode>
);