import './App.css';
import { useEffect, useState } from 'react';

// Great article on useEffect:
// https://medium.com/@athletecoder/how-to-useeffect-in-react-97c4e6dc0a88

function App() {

    const [type, setType] = useState('users')

    const [values, setValues] = useState([])

    const [pos, setPos] = useState({})

    // console.log('Component render');

    // function fetchValues(input) {
    //   fetch(`https://jsonplaceholder.typicode.com/${input}`)
    //     .then(response => response.json())
    //     .then(json => setValues(json))
    // }

    async function fetchValues(input) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/${input}`)
        const data = await response.json()
        setValues(data)
    }

    useEffect(() => {
        fetchValues(type)
    }, [type])


    const mouseMoveHandler = (e) => {
        setPos({
            "x": e.clientX,
            "y": e.clientY
        })
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)

        // It is absolutely necessary to unsubscribe 
        return function () {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [pos])

    return (
        <>
            <h1>Resourse: {type}</h1>

            <button onClick={() => setType('users')}>users</button>
            <button onClick={() => setType('todos')}>todos</button>
            <button onClick={() => setType('posts')}>posts</button>

            {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}

            <pre>{JSON.stringify(pos, null, 2)}</pre>

        </>
    );
}

export default App;
