import React from 'react';
import PropTypes from 'prop-types';

export default function Quote({ quote }) {
  return (
    <section>
      <img src={quote.image} />
      <p>{quote.character}</p>
      <span>{quote.quote}</span>
    </section>
  );
}

Quote.propTypes = {
  quote: PropTypes.shape({
    character: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};
