import React, { useState } from 'react'
import CurrencySelect from './CurrencySelect';

const ConverterForm = () => {
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setfromCurrency] = useState("USD");
  const [toCurrency, settoCurrency] = useState("GBP");
  const [result, setresult] = useState("");

  const handleSwapCurrencies = () => {
    setfromCurrency(toCurrency);
    settoCurrency(fromCurrency);
  }
  //function to fetch the exchange rate and update the result
  const getExchangeRate = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY; // Correctly access environment variable
    const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;


    try {
      const respond = await fetch(API_URL);
      if(!respond.ok) throw Error("Something ent wrong!");

      const data = await respond.json();
      const rate = (data.conversion_rate * amount).toFixed();
      setresult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);


    } catch (error) {
      console.log(error);
    }
  }
  //handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    getExchangeRate();
  }

  return (
    <form className="converter-form" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label className="form-label">Enter Amount</label>
        <input
          type="number" className="form-input" value={amount} onChange={(e) => setAmount(e.target.value)} required
        />
      </div>

      <div className="form-group form-currency-group">
        <div className="form-section">
          <label className="form-label">From</label>
          <CurrencySelect
            selectedCurrency={fromCurrency}
            handleCurrency={(e) => setfromCurrency(e.target.value)}
          />
        </div>

        <div className="swap-icon" onClick={handleSwapCurrencies}>
          {/* SVG swap icon */}
          <svg
            width="16"
            viewBox="0 0 20 19"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
              fill="#000"
            />
          </svg>
        </div>

        <div className="form-section">
          <label className="form-label">To</label>
          <CurrencySelect
            selectedCurrency={toCurrency}
            handleCurrency={(e) => settoCurrency(e.target.value)}
          />
        </div>
      </div>

      <div className="submit">
        <button type="submit" className="submit-button">
          Get Exchange Rate
        </button>
      </div>

      <div className="exchange-rate">
        <p className="exchange-rate-result">{result}</p>
      </div>

      <div className="disclaimer">
        <img
          src="https://cdn-icons-png.flaticon.com/512/15691/15691615.png"
          width="20"
          height="20"
          alt="Info free icon"></img>
        <span className='notice'>
          We use the mid-market rate for our Converter. This is for
          informational purposes only. You won’t receive this rate when sending
          money.
        </span>
      </div>
      <div />
    </form>
  );
}

export default ConverterForm