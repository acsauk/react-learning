import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const CountContext = React.createContext()

function CountNumber() {
    const { count } = useContext(CountContext)

    return <span style={{ color: "hotpink" }}>{count}</span>
}

function CountTitle() {
    return (
        <h1>
            The current count is <CountNumber />
        </h1>
    )
}

function App() {
    const [count, setCount] = useState(0);
    
    function increment(e) {
        e.preventDefault()
        setCount(oldCount => oldCount + 1)
    }

    function reset(e) {
        e.preventDefault();
        setCount(0)
    }

    return (
      <CountContext.Provider value={{count}}>
          <div className="App">
            <h1>How to useContext in React</h1>
            <button onClick={increment}>Increase Count</button>
            <button onClick={reset}>Reset Count</button>
            <CountTitle />
          </div>
      </CountContext.Provider>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
