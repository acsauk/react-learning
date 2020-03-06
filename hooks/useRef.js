import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
    const [value, setValue] = useState('');
    const messageRef = useRef()

    useEffect(() => {
        const boundingBox = messageRef.current.getBoundingClientRect() 
        console.log(boundingBox.width)
    })

    function handleInput(e) {
        setValue(e.target.value)
    }

    return (
          <div className="App">
            <h1>How to useRef in React</h1>
            <input value={value} onChange={handleInput} />
            <div>
                <span ref={messageRef}>{value}</span>
            </div>
          </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);