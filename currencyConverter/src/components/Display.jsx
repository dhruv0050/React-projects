import React, { useId } from 'react';
import './Display.css'; 

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    className = "",
}) {
    const amountId = useId() 
    return (
        <div className="input-container">
            <div className="input-box">
                <label htmlFor={amountId} className="input-label">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="input-field"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} //Number-->because json gives string type
                />
            </div>
            <div className="currency-selector">
                <p className="currency-label">Currency Type</p>
                <select className="currency-dropdown" 
                value={selectCurrency} 
                onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}>
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
                </select>
            </div>
        </div>
    );
}
export default InputBox;