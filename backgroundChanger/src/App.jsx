import { useState } from "react";
import Button from "./components/Button";
import myColors from './assets/colors.json';

function App() {
  const colors = myColors;
  console.log(colors);

  const [currentColor, setColor] = useState("black");

  const changeBackground = (color) => {
    setColor(color);
  };

  return (
    <div style={{ backgroundColor: currentColor }} className="relative w-full h-[100vh]">
  
      <div id="btmBar">
        <div className="bg-white rounded-xl p-2 shadow-lg w-[60%] h-full flex flex-wrap justify-center gap-3 mx-auto relative top-[85vh]">
          {colors.map((element, index) => (
            <Button
              key={index}
              changeBg={changeBackground}
              text={element.text}
              textColor={element.textColor}
              bgColor={element.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
