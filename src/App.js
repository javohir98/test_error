import './App.css';
import { useState, useEffect } from 'react';
import Async_await from './components/Async_await';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setTimeout(() => {
      setCount(count + 1)
    },1000)

    return () => clearTimeout(interval)

  })

  return (
    <div className="App">
      <p>{count}</p>
      <Async_await />
    </div>
  );
}

export default App;
