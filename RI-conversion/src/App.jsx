import React, { useState } from 'react';
import ConverterForm from './components/converter';
import { romanToInt } from './utils/romanToInt';
import { intToRoman } from './utils/intToRoman';
import './index.css';
import './App.css';

function App() {
  const [roman, setRoman] = useState('');
  const [integer, setInteger] = useState('');

  const handleRomanChange = (e) => {
    setRoman(e.target.value.toUpperCase());
  };

  const handleIntegerChange = (e) => {
    setInteger(e.target.value);
  };

  const convertRomanToInt = () => {
    setInteger(romanToInt(roman));
  };

  const convertIntToRoman = () => {
    setRoman(intToRoman(parseInt(integer)));
  };

  return (
    <div className="bg-custom-gradient min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl text-green-100 font-bold font-tertiary mb-8">Roman & Integer Converter</h1>
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <ConverterForm className='font-secondary'
          label="Roman to Integer"
          value={roman}
          onChange={handleRomanChange}
          onConvert={convertRomanToInt}
          result={integer}
          placeholder="Enter Roman Numeral"
          buttonText="Convert to Integer"
        />
        <ConverterForm className='font-secondary'
          label="Integer to Roman"
          value={integer}
          onChange={handleIntegerChange}
          onConvert={convertIntToRoman}
          result={roman}
          placeholder="Enter Integer"
          buttonText="Convert to Roman"
        />
      </div>
    </div>
  );
}

export default App;
