import './App.css';
import { useEffect, useRef, useState } from 'react';

// let upg = 0;

function App() {

    // const [renderCounter, setRenderCounter] = useState(0)

    // Following code will provoke an endless loop
    // Comp mounts -> useEffect runs -> state change -> comp rerenders -> useEffect runs; And so on...
    // useEffect(() => {
    //   setRenderCounter(prev => prev + 1)
    // }, [renderCounter])

    // useRef returns an object with one key --> 'current'
    // If we want to save something between renders, without changing it, we use Ref. 
    // useRef doesn't trigger a render
    let upg = useRef(0)

    // Gets triggered on any state change (on every rerender)
    useEffect(() => {
        upg.current++
    })

    const [val, setVal] = useState('')

    // Link it with ref attribute of the input
    const inputRef = useRef(null)
    const focus = () => inputRef.current.focus()

    // Saving previous val state 
    const prevValue = useRef('')
    useEffect(() => {
        prevValue.current = val
    })

    return (
        <>
            <h1>Amount of renders: {upg.current}</h1>
            <h2>Previous value: {prevValue.current}</h2>

            <input ref={inputRef} type="text" onChange={(e) => setVal(e.target.value)} value={val} />

            <button onClick={focus}>Focus</button>
        </>
    );
}

export default App;
