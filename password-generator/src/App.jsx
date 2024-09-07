import { useCallback, useState, useEffect } from "react";
import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [numbers, setNumbers] = useState(false);
  const [character, setCharacter] = useState(false);
  const [passkey, setPasskey] = useState("");

  
  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "0123456789";
    if (character) str += "!@#$%^&*-_+=[]{}~`";

    
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); 
      pass += str.charAt(char);
    }
    setPasskey(pass);
  }, [length, numbers, character]); 


  useEffect(() => {
    passGen();
  }, [length, numbers, character, passGen]);

  return (
    <div className="main">
      <div className="secondary">
        <input
          className="input-field"
          type="text"
          placeholder="Password"
          value={passkey}
          readOnly
        />
      </div>
      <div className="lower-A">
        <div className="lower-B">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="input-bar"
            onChange={(e) => setLength(Number(e.target.value))} 
          />
          <label>Length: {length}</label>
        </div>
        <div className="num-checkbox">
          <input
            type="checkbox"
            checked={numbers} 
            id="numberInput"
            onChange={() => setNumbers((prev) => !prev)} // Toggle numbers on/off
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="char-checkbox">
          <input
            type="checkbox"
            checked={character} 
            id="characterInput"
            onChange={() => setCharacter((prev) => !prev)} // Toggle special characters on/off
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;

