import React from 'react';
import PropTypes from 'prop-types';

const MemeItem = (meme) => (

  <section>
    <h1>{meme.headline}</h1>
    <img src = {meme.image} />
    <h1>{meme.caption}</h1>
  </section>
);

MemeItem.propTypes = {
  meme: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default MemeItem;