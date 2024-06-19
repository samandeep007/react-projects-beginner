import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0); //default value --> anything
  // let counter = 15;

  const addValue = () => {
    // let newCounter = counter + 1 --> Value is getting updated but it is not being rendered to DOM. Why???
    setCounter((counter) => counter + 1); //setCounter accepts a function callback and returns the previous value of the state
    // setCounter(counter => counter + 1)
    // setCounter(counter => counter + 1)
    // setCounter(counter => counter + 1)
    //Here each setter is accepting a previous value and incrementing it by one
    //if you do the same without using the callback function, it will batch the same kind of functions and updates the final value by one only irrespective of how many setter you may have
  };

  const reduceValue = () => {
    setCounter(counter - 1);
    // setCounter(counter-2)
    // setCounter(counter-3)
    // counter = counter - 1;
    //as we have already studied about how fiber handles the frequent re-rendering of state behind the scenes, we know that only the last state value is rendered on the DOM instead of rendering every individual one
  };

  return (
    <>
      <h1>Chai aur react 🍵</h1>
      <h2>Counter Value: {counter}</h2>
      <button disabled={counter == 20} style={{ marginRight: "20px" }} onClick={addValue}>Add Value: {counter}</button>
      <button disabled={counter == 0} onClick={reduceValue}>Remove Value: {counter}</button>
      <footer style={{ marginTop: "40px" }}>Current Value: {counter}</footer>
    </>
  );
}

export default App;
