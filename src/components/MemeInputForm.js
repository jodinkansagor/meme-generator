import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import buffy1 from '../assets/Buffy1.jpg';
import buffy2 from '../assets/Buffy2.jpg';
import buffy3 from '../assets/Buffy3.jpeg';
import styles from './MemeInputForm.css';
import { fetchPostMeme } from '../actions/memeInputAction';


const MemeInputForm = () => {
  const [headline, setHeadline] = useState('');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const meme = {
    headline,
    caption,
    image
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchPostMeme(meme));
  };


  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <section className={styles.textInput}>
        <h2>Headline: </h2>
        <input type="text" id="headline" value={headline} onChange={({ target }) => setHeadline(target.value)} />
        <h2>Caption: </h2>
        <input type="text" value={caption} onChange={({ target }) => setCaption(target.value)} />
       

      </section>
      <section className={styles.imagesInput}>
        <input type="radio" value="buffy1" id="buffy1" name={image} onChange={({ target }) => setImage(target.value)} />
        <label htmlFor="buffy1"><img src={buffy1} /></label>
        <input type="radio" value="buffy2" id="buffy2 " name={image} onChange={({ target }) => setImage(target.value)} />
        <label htmlFor="buffy2"><img src={buffy2} /></label>
        <input type="radio" value="buffy3" id="buffy3 " name={image} onChange={({ target }) => setImage(target.value)} />
        <label htmlFor="buffy3"><img src={buffy3} /></label>
      </section>
      <button>Submit Your Meme!</button>
    </form>
  );
};

export default MemeInputForm;
