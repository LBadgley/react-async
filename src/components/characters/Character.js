import React from 'react';
import PropTypes from 'prop-types';

// presentational component

function Character({ character }) {
  const {
    name,
    status,
    species,
    image
  } = character;
  return (
    <section>
      <img src={image} />
      <p>{name}</p>
      <p>{status}</p>
      <p>{species}</p>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    
  })
}
