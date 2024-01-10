import { useState, useEffect } from "react";

export default function NewMeme() {
  // Responsible for state of texts and images
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "",
  });

  // Responsible for state of meme data being fetched from url
  const [allMemes, setAllMemes] = useState([]);

  // Responsible for fetching data from url
  // Use meme dependency to make sure we do not create an infinite
  // loop of re-fetching items and re-rendering dom elements
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(memeData => setAllMemes(memeData.data.memes))
  }, [meme])

  // Get new Meme Image
  function getMemeImg() {
    const memesArray = allMemes;
    const randomNum = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNum].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: url,
    }));
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
        ...prevMeme,
        [name]: value
    }))
  }

  return (
    <main>
      <div className="new-meme-container">
        <div className="input1">
          <label className="first-label">Top text</label>
          <input
            className="first-text medium-font"
            type="text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>

        <div className="input2">
          <label className="second-label">Bottom Text</label>
          <input
            className="second-text medium-font"
            type="text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button className="submit-btn" type="button" onClick={getMemeImg}>
          Generate Another Meme 🖼
        </button>
      </div>
      <div className="meme-img">
        <img src={meme.randomImg} />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
