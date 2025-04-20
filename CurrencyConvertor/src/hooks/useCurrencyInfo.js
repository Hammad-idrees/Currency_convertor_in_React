import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((err) => console.error("Error fetching rates:", err));
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
