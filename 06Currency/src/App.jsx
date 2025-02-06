import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyinfo from "./hooks/useCurrencyinfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount); // Assign previous convertedAmount to amount
    setConvertedAmount(amount); // Keep the original amount as convertedAmount
  };

  const convert = () => {
    setConvertedAmount(amount * (currencyInfo[to] || 0));
  };

  return (
    <div className="w-full h-screen bg-gray-500 flex flex-col items-center justify-center">
      <div className="w-full max-w-md flex flex-col gap-y-2 border-2 bg-white/30 border-white p-5 backdrop-blur-md shadow-lg rounded-xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          action=""
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectedCurrency={from}
              onAmountChange={(amount) => setAmount(Number(amount))}
            />
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white border-2 rounded-md bg-blue-500 text-white p-1"
                onClick={swap}
              >
                Swap
              </button>
            </div>

            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectedCurrency={to}
              amountDisabled
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
