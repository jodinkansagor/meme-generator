import { FETCH_POST_MEME_LOADING, FETCH_POST_MEME } from '../actions/memeInputAction';
import reducer from './memeReducer';
import { FETCH_GET_MEME_LOADING, FETCH_GET_MEME } from '../actions/memeListAction';

describe('meme reducer', () => {
  it('handles fetch posting loading meme', () => {
    const action = { type: FETCH_POST_MEME_LOADING };
    const initialState = { loading: false, meme: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      meme: null
    });
  });

  it('handles fetching post memes', () => {
    const action = {
      type: FETCH_POST_MEME,
      payload: { headline: 'headline', caption: 'caption', image: 'image' }
    };
    const initialState = { loading: true, meme: null };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      meme: { headline: 'headline', caption: 'caption', image: 'image' }
    });
  });

  it('handles fetch get loading', () => {
    const action = { type: FETCH_GET_MEME_LOADING };
    const initialState = { loading: false, memeArray: [] };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: true,
      memeArray: []
    });
  });

  it('handles get fetch', () => {
    const action = { type: FETCH_GET_MEME, payload: [
      { headline: 'headline', caption: 'caption', image: 'image' },
      { headline: 'headline2', caption: 'caption2', image: 'image2' }
    ]};
    const initialState = { loading: true, memeArray: [] };

    const newState = reducer(initialState, action);

    expect(newState).toEqual({
      loading: false,
      memeArray: [
        { headline: 'headline', caption: 'caption', image: 'image' },
        { headline: 'headline2', caption: 'caption2', image: 'image2' }
      ]
    });
  });
});
