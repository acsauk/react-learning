import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [mouseX, setMouseX] = useState("0");
  const [mouseY, setMouseY] = useState("0");

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  })

  function handleMouseMove(e) {
    setMouseX(e.clientX)
    setMouseY(e.clientY)
  }

  return (
    <div className="App">
      <h1>How to useEffect in React</h1>
      <p>Mouse X position is: {mouseX}</p>
      <p>Mouse Y position is: {mouseY}</p>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
