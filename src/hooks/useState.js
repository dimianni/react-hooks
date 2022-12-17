// Plug everything into App.js

import './App.css';
import { useState } from 'react';


function calculations() {
    console.log("Making some calculations");
    return Math.trunc(Math.random() * 20)
}


function App() {

    // useState returns an array (a tuple) with two predefined elements
    // useState(calculations()) --> calculations() will get triggered on every state change due to component re-render
    // BUT if we use a callback function, calculations() will only run on initial mount
    const [counter, setCounter] = useState(() => {
        return calculations()
    })

    // EVERY STATE CHANGE TRIGGERS A COMPONENT RE-RENDER
    const add = () => {
        setCounter(prevCounter => prevCounter + 1)
    }
    const subtract = () => {
        setCounter(prevCounter => prevCounter - 1)
    }


    const [obj, setObj] = useState({
        title: "Hello World!",
        date: Date.now()
    })

    // If we don't insert previous object (...prevObj) --> date will be gone,
    // the state will just get changed for the value we passed
    const changeTitle = () => {
        setObj(prevObj => {
            return { ...prevObj, title: "Hello everyone!" }
        })
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>

            {/* Preformatted text */}
            {/* The text will be displayed exactly as written in the HTML source code. */}
            <pre>{JSON.stringify(obj, null, 2)}</pre>
            <button onClick={changeTitle}>Change title</button>
        </>
    );
}

export default App;
