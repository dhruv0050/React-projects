import { useState } from 'react';
import './App.css';
import {InputBox} from './components'; 
import useInfo from './hooks/useInfo';

function App() {
  const [amount, setAmount] = useState();
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("usd");
  const [result, setResult] = useState();
  const currencyInfo = useInfo(from);
  const options = Object.keys(currencyInfo);
  const convert = () => {
    setResult(amount * currencyInfo[to]);
  };

  return (
    <div
      className="background-container"
    >
      <div className="form-container">
        <div className="form-box">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="input-box-container">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative-container">
            </div>
            <div className="input-box-container mt-1">
              <InputBox
                label="To"
                amount={result}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                onAmountChange={() => {}} 
              />
            </div>
            <button type="submit" className="submit-button">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
