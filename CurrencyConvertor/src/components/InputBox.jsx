import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-white p-4 rounded-lg text-sm shadow-md mb-4 ${className}`}
    >
      <div className="mb-2">
        <label
          htmlFor={amountInputId}
          className="text-gray-600 font-medium block mb-1"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full border border-gray-300 rounded-md px-3 py-2"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="mt-2">
        <label className="text-gray-600 font-medium block mb-1">
          Currency Type
        </label>
        <select
          className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100 cursor-pointer"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
