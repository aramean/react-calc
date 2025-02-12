import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState('0')
  const [reset, setReset] = useState(false)

  const handleNumber = (val) => {
    if (reset) {
      setDisplay(val)
      setReset(false)
    } else {
      setDisplay(prev => (prev === '0' ? '' : prev) + val.toString())
    }
  }

  const handleArithmetic = (val) => {
    setDisplay(display + val.toString())
  }

  const handleCalculation = () => {
    try {
      setDisplay(eval(display))
      setReset(true)
    } catch (e) {
      setDisplay('ERROR?')
    }
  }

  const handleReset = () => {
    setDisplay('0')
  }

  return (
    <div className="App">
      <input type="text" value={display} readOnly></input>

      <button class="first" onClick={() => handleReset()}>AC</button>
      <button class="first" onClick={() => handleNumber(7)}>7</button>
      <button class="first" onClick={() => handleNumber(4)}>4</button>
      <button class="first" onClick={() => handleNumber(1)}>1</button>
      <button class="first"></button>

      <button class="second"></button>
      <button class="second" onClick={() => handleNumber(8)}>8</button>
      <button class="second" onClick={() => handleNumber(5)}>5</button>
      <button class="second" onClick={() => handleNumber(2)}>2</button>
      <button class="second" onClick={() => handleNumber(0)}>0</button>

      <button class="third"></button>
      <button class="third" onClick={() => handleNumber(9)}>9</button>
      <button class="third" onClick={() => handleNumber(6)}>6</button>
      <button class="third" onClick={() => handleNumber(3)}>3</button>
      <button class="third"></button>

      <button class="last" onClick={() => handleArithmetic('/')}>÷</button>
      <button class="last" onClick={() => handleArithmetic('*')}>×</button>
      <button class="last" onClick={() => handleArithmetic('-')}>-</button>
      <button class="last" onClick={() => handleArithmetic('+')}>+</button>
      <button class="last" onClick={() => handleCalculation()}>=</button>
    </div>
  )
}

export default App
