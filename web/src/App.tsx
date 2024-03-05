import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1);
  }

  return <div>
    <h1>This is a count app!</h1>
    <h2>Current count {count}</h2>
    <button onClick={handleClick}>Click Me!</button>
  </div>;
}

export default App
