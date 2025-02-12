import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')

  const handleClick = (val) => {
    setDisplay(!val ? '0' : (prev => (prev === '0' ? '' : prev) + val))
  }

  const handleCalc = () => {
    try{
      setDisplay(eval(display))
    }catch(e) {
      setDisplay('ERROR?')
    }
  }

  return (
    <div className="App">
      <input type="text" value={display} readOnly></input>

      <button class="first" onClick={() => handleClick()}>AC</button>
      <button class="first" onClick={() => handleClick(7)}>7</button>
      <button class="first" onClick={() => handleClick(4)}>4</button>
      <button class="first" onClick={() => handleClick(1)}>1</button>
      <button class="first"></button>

      <button class="second"></button>
      <button class="second" onClick={() => handleClick(8)}>8</button>
      <button class="second" onClick={() => handleClick(5)}>5</button>
      <button class="second" onClick={() => handleClick(2)}>2</button>
      <button class="second"></button>

      <button class="third"></button>
      <button class="third" onClick={() => handleClick(9)}>9</button>
      <button class="third" onClick={() => handleClick(6)}>6</button>
      <button class="third" onClick={() => handleClick(3)}>3</button>
      <button class="third"></button>

      <button class="last" onClick={() => handleClick('/')}>÷</button>
      <button class="last" onClick={() => handleClick('*')}>×</button>
      <button class="last" onClick={() => handleClick('-')}>-</button>
      <button class="last" onClick={() => handleClick('+')}>+</button>
      <button class="last" onClick={() => handleCalc()}>=</button>
    </div>
  );
}

export default App
