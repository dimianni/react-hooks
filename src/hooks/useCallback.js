import './App.css';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ItemsList from './ItemsList'


function App() {

    const [count, setCount] = useState(1)
    const [colored, setColored] = useState(false)


    const styles = {
        color: colored ? "red" : "black"
    }


    // useCallback 'caches' the function, so that it doesn't recreate on rerender
    // useCallback returns the entire function
    const generateAPIItems = useCallback(() => {
        return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
    }, [count])


    return (
        <>
            <h1 style={styles}>Number of elements: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>

            <button onClick={() => setColored(prev => !prev)}>Change color</button>

            <ItemsList generateItems={generateAPIItems} />
        </>
    );
}

export default App;
