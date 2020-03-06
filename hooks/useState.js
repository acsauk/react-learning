import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const [value, setValue] = useState("");

  function handleInput(e) {
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>How to useState in React</h1>
      <input value={value} onChange={handleInput} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);