import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// fake comment
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id} `,
      })
    );
  }, 2000);
}
emitComment(1);
emitComment(2);
emitComment(3);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
