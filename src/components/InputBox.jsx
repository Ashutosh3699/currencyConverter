import React from 'react'

const InputBox = ({label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency="usd",
    amountDisable = false,
    currencyDisable= false,
    className}) => {


        console.log(currencyOptions);
        
    return ( <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
            <div className="w-1/2">
                <label  className="text-black/40 mb-2 inline-block"
                htmlFor='inputTag'
                >
                    { label }
                    
                </label>
                <input
                    
                    id='inputTag'
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled = {amountDisable}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled = {currencyDisable}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    {
                        currencyOptions.map((currrency)  => (
                            <option
                            key={currrency}
                            value={currrency}
                            >
                                {currrency}
                            </option>
                        ))
                    }
                
                </select>
            </div>
        </div>
    );
}


export default InputBox