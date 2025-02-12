import { useState } from 'react'
import './App.css'

function App() {
  const [memory, setMemory] = useState('0')
  const [reset, setReset] = useState(false)

  const handleNumber = (val) => {
    if (reset) {
      setMemory(val)
      setReset(false)
    } else {
      setMemory(prev => filterMemory(prev === '0' ? '' : prev) + String(val))
    }
  }

  const handleComma = () => {
    setMemory(filterMemory(memory + '.'))
  }

  const handleArithmetic = (val) => {
    setMemory(filterMemory(memory + String(val)))
  }

  const handleCalculation = () => {
    try {
      setMemory(eval(memory))
      setReset(false)
    } catch (e) {
      setMemory('ERROR?')
      console.error(e)
    }
  }

  const handleReset = () => {
    setMemory('0')
  }

  const handleDisplay = (memory) => {
    const replacements = [
      { search: '.', replace: ',' },
      { search: '*', replace: '×' },
      { search: '+', replace: '+' },
      { search: '-', replace: '-' },
      { search: '/', replace: '÷' },
    ]

    return replacements.reduce(
      (str, { search, replace }) => str.replaceAll(search, replace), String(memory))
  }

  const filterMemory = (memory) => {

    // Remove repeating chars
    const replacements = [
      { search: '..', replace: '.' },
      { search: '**', replace: '*' },
      { search: '++', replace: '+' },
      { search: '--', replace: '-' },
      { search: '//', replace: '//' },
    ]

    return replacements.reduce(
      (str, { search, replace }) => str.replaceAll(search, replace), String(memory))
  }

  return (
    <><main>
      <input type="text" value={handleDisplay(memory)} readOnly></input>

      <button className="first clear" onClick={() => handleReset()}>AC</button>
      <button className="first" onClick={() => handleNumber(7)}>7</button>
      <button className="first" onClick={() => handleNumber(4)}>4</button>
      <button className="first" onClick={() => handleNumber(1)}>1</button>
      <button className="first disabled"></button>

      <button className="second disabled"></button>
      <button className="second" onClick={() => handleNumber(8)}>8</button>
      <button className="second" onClick={() => handleNumber(5)}>5</button>
      <button className="second" onClick={() => handleNumber(2)}>2</button>
      <button className="second" onClick={() => handleNumber(0)}>0</button>

      <button className="third disabled"></button>
      <button className="third" onClick={() => handleNumber(9)}>9</button>
      <button className="third" onClick={() => handleNumber(6)}>6</button>
      <button className="third" onClick={() => handleNumber(3)}>3</button>
      <button className="third" onClick={() => handleComma()}>,</button>

      <button className="last" onClick={() => handleArithmetic('/')}>÷</button>
      <button className="last" onClick={() => handleArithmetic('*')}>×</button>
      <button className="last" onClick={() => handleArithmetic('-')}>-</button>
      <button className="last" onClick={() => handleArithmetic('+')}>+</button>
      <button className="last" onClick={() => handleCalculation()}>=</button>
    </main>
      <footer>
        <a href="https://github.com/aramean/react-calc" target="_blank">View Source Code on GitHub</a>
      </footer></>
  )
}

export default App
