import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[color, setColor] = useState("pink")
  
  const changeColor = () => {
  const randomKey1 = Math.floor(Math.random(0, 256) * 200)
  const randomKey2 = Math.floor(Math.random(0, 256) * 200)
  const randomKey3 = Math.floor(Math.random(0, 256) * 200)
  console.log(`${randomKey1} ${randomKey2} ${randomKey3}`)  
  setColor(`rgb(${randomKey1} ${randomKey2} ${randomKey3})`)
  }
  
  return (
    <>
      <div style={{background: color}}>
        <button id="btnBg" onClick={changeColor}>Change Color</button>
      </div>
    </>
  )
}

export default App
