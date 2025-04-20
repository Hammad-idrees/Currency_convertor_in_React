import { useState } from "react";
import "./App.css";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')`,
      }}
    >
      <div className="bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-6 w-full max-w-md">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(value) => setAmount(value)}
            selectCurrency={from}
          />

          <div className="text-center my-4">
            <button
              type="button"
              onClick={swap}
              className="bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition"
            >
              ⬇️ Swap ⬆️
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisable
          />

          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-black py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
