import React from 'react';
import { useSelector } from 'react-redux';
import MemeItem from './MemeItem';

const MemeList = () => {
  const memes = useSelector()

  const memeElements = memes.map(meme => (
    <li key={meme._id}>
      <MemeItem {...meme} />
    </li>
  ));

  return (
    <section>
      {memeElements}
    </section>
  );
};

export default MemeList;

