import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [includeNums, setIncludeNums] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const[password, setPassword] = useState(null);

  useEffect(() => {
    const generatePassword = () => {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz';
      const numbers = '0123456789';
      const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';
      let chars = alphabet;

      if (includeNums) {
        chars += numbers;
      }

      if (includeChars) {
        chars += specialChars;
      }

      let generatedPassword = '';
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        generatedPassword += chars[randomIndex];
      }

      return generatedPassword;
    };

    setPassword(generatePassword());
  }, [length, includeNums, includeChars]);

  const copyText = () => {
  
    navigator.clipboard.writeText(password)
    e.preventDefault()
  };


  return (
    <>
      <h1 className="text-4xl text-center font-semibold text-white my-5">Password Generator</h1>
      


      <div className='bg-gray-800 w-3/4 h-auto p-5 rounded-lg mx-auto flex items-center flex-wrap'>
      <div class="w-1/2 mx-auto">
    <div class="flex">
        <div class="relative w-full">
            <input type="search" id="search-dropdown" disabled={true} value={password} class="p-2.5 w-full z-20 text-xl font-semibold text-gray-900 bg-gray-50 rounded-lg border-s-gray-50 border-s-2 border border-gray-300"  />
            <button onClick={copyText} class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               
                <span class="">Copy</span>
            </button>
        </div>
    </div>
</div>
      
       <div className="flex justify-left gap-5">
     
        <input
          id="steps-range"
          type="range"
          step="1"
          min="1"
          max="100"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="w-1/4 h-2 my-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-100"
        />
        <p className='text-orange-400 font-semibold'>Length ({length})</p>

        <div className='flex gap-2' id="numbers">
          <input
            checked={includeNums}
            id="bordered-checkbox-nums"
            type="checkbox"
            key="bordered-checkbox-nums"
            value={includeNums}
            
            onChange={(e) => setIncludeNums(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded my-1 focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <p className='text-orange-400 font-semibold'>Numbers</p>
        </div>

        <div className='flex gap-2' id="characters">
          <input
            checked={includeChars}
            id="bordered-checkbox-chars"
            type="checkbox"
           key="bordered-checkbox-chars"
            value={includeChars}
        
            onChange={(e) => setIncludeChars(e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 my-1 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <p className='text-orange-400 font-semibold'>Characters</p>
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
