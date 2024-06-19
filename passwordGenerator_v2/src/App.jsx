import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const[length, setLength] = useState(8);
  const[numberAllowed, setNumberAllowed] = useState(false);
  const[charAllowed, setCharAllowed] = useState(false);
  const[password, setPassword] = useState(null);


  //useRef hook
  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  }, [password]) 


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str += "1234567890"
    }
    if(charAllowed){
      str += "!@#$%^&*_-=[]{}~`"
    }

    for(let i = 1; i<=length; i++){
      let randomIndex = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(randomIndex);
    }

    setPassword(pass)

    
  }, [length, numberAllowed, charAllowed, setPassword]); //UseCallBack is for optimization only


  useEffect(() => {passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator]); //For re-redering on any change

  return (
    <>
     <h1 className='text-4xl text-center my-4 font-semibold text-white'>Password Generator</h1>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-orange-500 bg-gray-800 flex overflow-hidden mb-4 flex-col gap-y-4'>
      <div className="flex gap-x-1">
      <input className="outline-none w-full py-1 px-3 rounded-lg text-gray-700  text-lg" placeholder="Password" type="text" value={password} ref={passwordRef} readOnly />
    <button onClick={copyToClipboard} className='outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
    </div>
   
    <div className="flex text-md gap-x-2">
      <div className="flex items-center gap-x-1"><input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => setLength(e.target.value)} /> <label>Length: {length}</label></div>
      <div className="flex items-center gap-x-1"><input type="checkbox"  value={length} className='cursor-pointer' onChange={(e) => setNumberAllowed(e.target.checked)} /> <label>Numbers</label></div>
      <div className="flex items-center gap-x-1"><input type="checkbox"  value={length} className='cursor-pointer' onChange={(e) => setCharAllowed(e.target.checked)} /> <label>Characters</label></div>
    </div>
    
   
    

    </div>
    </>
  )
}

export default App
