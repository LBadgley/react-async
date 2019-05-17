import React, { useState } from 'react';
import BestQuotes from '../containers/quotes/BestQuotes';
import CharacterQuotes from '../containers/quotes/CharacterQuotes';

export default function App() {
  const [quotes, updatesQuotes] = useState('top');

  return (
    <>
      <button onClick={() => updatesQuotes('top')}>Best Quotes</button>
      <button onClick={() => updatesQuotes('character')}>Character Quotes</button>
      {quotes === 'top' && <BestQuotes />}
      {quotes === 'character' && <CharacterQuotes />}
    </>
  );
}
