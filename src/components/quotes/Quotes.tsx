import React, { useEffect } from 'react';
import './Quotes.scss';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchQuotes } from '../../features/quotes/fetchQuotesSlice';

const Quotes: React.FC = () => {
  const dispatch = useAppDispatch();
  const quotes = useAppSelector((state) => state.quotes.quotes);

  useEffect(() => {
    if (quotes.text === undefined) {
      const randomNum = getRanNum();
      dispatch(fetchQuotes(randomNum));
    }
  }, []);

  const getRanNum = () => {
    const randomNum = Math.random() * 1400;
    const randomNumFloor = Math.floor(randomNum);
    return randomNumFloor;
  };

  return (
    <div className="quotes_section">
      {quotes.text !== undefined ? (
        <>
          <div className={quotes.text.length > 80 ? `long_quotes` : `quotes`}>
            {quotes.text}
          </div>
          <div className="author">
            {quotes.author !== null ? `- ${quotes.author}` : 'unknown'}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Quotes;
