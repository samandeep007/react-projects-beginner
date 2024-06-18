import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0); //default value --> anything
  // let counter = 15;

  const addValue = () => {
    let newCounter = counter + 1; //Value is getting updated but it is not being rendered to DOM. Why???
    setCounter(newCounter)
  };

  const reduceValue = () => {
    setCounter(counter-1)
    // counter = counter - 1;
  };

  return (
    <>
      <h1>Chai aur react 🍵</h1>
      <h2>Counter Value: {counter}</h2>
      <button disabled={counter == 20} style={{ marginRight: "20px" }} onClick={addValue}>
        Add Value: {counter}
      </button>
      <button disabled={counter == 0} onClick={reduceValue}>Remove Value: {counter}</button>
      <footer style={{ marginTop: "40px" }}>Current Value: {counter}</footer>
    </>
  );
}

export default App;
