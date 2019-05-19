import React, { useState } from 'react';
import BestQuotes from '../containers/quotes/BestQuotes';
import CharacterQuotes from '../containers/quotes/CharacterQuotes';

export default function App() {
  const [quotes, updateQuotes] = useState('top');

  return (
    <>
      <button onClick={() => updateQuotes('top')}>Best Quotes</button>
      <button onClick={() => updateQuotes('character')}>Character Quotes</button>
      {quotes === 'top' && <BestQuotes />}
      {quotes === 'character' && <CharacterQuotes />}
    </>
  );
}
