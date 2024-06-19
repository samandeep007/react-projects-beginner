import { useState } from 'react'
import './App.css'

function App() {
  const[color, setColor] = useState("pink")
  
  const changeColor = () => {
  const randomKey1 = Math.floor(Math.random(0, 256) * 255)
  const randomKey2 = Math.floor(Math.random(0, 256) * 255)
  const randomKey3 = Math.floor(Math.random(0, 256) * 255)
  
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
