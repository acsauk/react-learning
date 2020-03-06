import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
    const [value, setValue] = useState('');
    const messageRef = useRef()

    useEffect(() => {
        console.log(messageRef)
    })

    function handleInput(e) {
        setValue(e.target.value)
    }

    return (
          <div className="App">
            <h1>How to useRef in React</h1>
            <input value={value} onChange={handleInput} />
            <div>
                <span>{value}</span>
            </div>
          </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
