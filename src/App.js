import './App.css';
import { useEffect, useMemo, useRef, useState } from 'react';


const complexComputations = (num) => {

  let i = 0;
  while (i < 1000000000) i++

  return num * 2
}


function App() {

  const [value, setValue] = useState(30)
  const [colored, setColored] = useState(false)

  // complexComputations gets triggered even on 'Change color' btn click
  // because state changes -> comp rerenders
  // const computed = complexComputations(value)

  // useMemo will only recompute the memoized value when one of the deps has changed.
  const computed = useMemo(() => {
    return complexComputations(value)
  }, [value])

  const styles = {
    color: colored ? "red" : "black"
  }


  useEffect(() => {
    console.log('color changed');
  }, [colored])

  return (
    <>
      <h1 style={styles}>Computed value: {computed}</h1>
      <button onClick={() => setValue(prev => prev + 1)}>Add</button>
      <button onClick={() => setValue(prev => prev - 1)}>Subtract</button>

      <button onClick={() => setColored(prev => !prev)}>Change color</button>
    </>
  );
}

export default App;
