import { useState } from 'react'
import './App.css';

function App() {
  const [test, setTest] = useState('0');

  const handleClick = (val) => {
    setTest(!val ? '0' : (prev => (prev === '0' ? '' : prev) + val));
  }

  return (
    <div className="App">
      <input type="text" value={test} readOnly></input>
      <button onClick={() => handleClick()}>C</button>
      <button onClick={() => handleClick(9)}>9</button>
      <button onClick={() => handleClick(8)}>8</button>
      <button onClick={() => handleClick(7)}>7</button>
      <button onClick={() => handleClick(6)}>6</button>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(4)}>4</button>
      <button onClick={() => handleClick(3)}>3</button>
      <button onClick={() => handleClick(2)}>2</button>
      <button onClick={() => handleClick(1)}>1</button>
    </div>
  );
}

export default App;
