
export const postMeme = (meme) => {
  return fetch(`${process.env.MEME_URL}`, {
    headers: {
      'Content-Type': 'application/json'
    },
    body: meme
  })
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;

      return json;
    });
};
