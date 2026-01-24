import {  useCallback, useState,useEffect,useRef } from "react"


function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef Hook
  const passwordRef = useRef(null);

  // Password Generator Function

  const passwordGenerator = useCallback(() => { 

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%&*()+-~{}_^=|<>?:";

    for (let i = 1; i <= length; i++){
     
      let char = Math.floor(Math.random() * str.length + 1)
          pass += str.charAt(char);
    }
    
   setPassword(pass)
    
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 101); 
    window.navigator.clipboard.writeText(password)
   }, [password])


  useEffect(() => {
    passwordGenerator()
   }, [length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-10  py-5 my-8  text-black bg-blue-500">
      <h1 className="text-white text-center text-xl font-semibold my-3">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 bg-white text-lg"
          placeholder="Password"
          readOnly 
          ref={passwordRef}
        />

        <button className="outline-none bg-blue-800 text-white px-3 py-0.5 shrink-0"
        onClick={copyPasswordClipboard}
        >
          Copy
        </button>
      </div>

      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{length}</label>
        </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              name="numberAllowed"
              id="numberAllowed"
              checked={numberAllowed}
              onChange={() => {
                setNumberAllowed( prev => !prev);
              }}
            />
            <label htmlFor="numberAllowed">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            name="characterAllowed"
            id="characterAllowed"
            checked={characterAllowed}
            onChange={() => {
              setCharacterAllowed( prev => !prev);
            }}
          />
          <label htmlFor="characterAllowed">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App
