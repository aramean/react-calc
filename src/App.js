import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [reset, setReset] = useState(false)

  const handleInput = (val) => {
    setDisplay(!val ? '0' : (prev => (prev === '0' ? '' : prev) + val))
    if (reset) {
      setDisplay(val)
      setReset(false)
    }
  }

  const handleCalc = () => {
    try {
      setDisplay(eval(display))
      setReset(true)
    } catch (e) {
      setDisplay('ERROR?')
    }
  }

  const handleReset = () => {
    setDisplay(0);
  }

  return (
    <div className="App">
      <input type="text" value={display} readOnly></input>

      <button class="first" onClick={() => handleReset()}>AC</button>
      <button class="first" onClick={() => handleInput(7)}>7</button>
      <button class="first" onClick={() => handleInput(4)}>4</button>
      <button class="first" onClick={() => handleInput(1)}>1</button>
      <button class="first"></button>

      <button class="second"></button>
      <button class="second" onClick={() => handleInput(8)}>8</button>
      <button class="second" onClick={() => handleInput(5)}>5</button>
      <button class="second" onClick={() => handleInput(2)}>2</button>
      <button class="second"></button>

      <button class="third"></button>
      <button class="third" onClick={() => handleInput(9)}>9</button>
      <button class="third" onClick={() => handleInput(6)}>6</button>
      <button class="third" onClick={() => handleInput(3)}>3</button>
      <button class="third"></button>

      <button class="last" onClick={() => handleInput('/')}>÷</button>
      <button class="last" onClick={() => handleInput('*')}>×</button>
      <button class="last" onClick={() => handleInput('-')}>-</button>
      <button class="last" onClick={() => handleInput('+')}>+</button>
      <button class="last" onClick={() => handleCalc()}>=</button>
    </div>
  );
}

export default App
