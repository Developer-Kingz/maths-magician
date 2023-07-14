import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes',
          {
            headers: {
              'X-Api-Key':
                                'Brp9Cj/1tTEh3HQN6E8ReA==Pnh6iW9UxEXlUpBk',
            },
          },
        );
        const json = await res.json();
        setQuotes(json);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    setTimeout(fetchData, 5000);
  }, [quotes]);

  return (
    <div className="my-quotes">
      <h1>Quotes of the day</h1>
      <div className="quotes">
        {loading
          ? 'loading...'
          : quotes.map((quote) => (
            <li key={quote.id}>{quote.quote}</li>
          ))}
      </div>
      {error ? <p>Cannot load data</p> : null}
    </div>
  );
};

export default Quotes;
