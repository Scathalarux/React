import { useState, type ChangeEvent, useEffect } from "react";

export function Main() {
  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState({
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setMemes(data.data.memes));
  }, []);

  const handleTextChange = (event: ChangeEvent) => {
    const { value, name } = event.target;

    /*if (event.target.name === "topText") { setMeme({ ...meme, topText: value }); }
     else if (event.target.name === "bottomText") { setMeme({ ...meme, bottomText: value }); }*/

    setMeme({ ...meme, [name]: value });
  };

  const chooseRandomMeme = () => {
    const randomNumber = Math.floor(Math.random() * memes.length);
    const selectedMeme = memes[randomNumber];

    console.log(selectedMeme);
    setMeme({ ...meme, imageUrl: selectedMeme.url });
  };

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input
            type="text"
            placeholder="One does not simply"
            name="topText"
            onChange={handleTextChange}
            value={meme.topText}
          />
        </label>

        <label>
          Bottom Text
          <input
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            onChange={handleTextChange}
            value={meme.bottomText}
          />
        </label>
        <button onClick={chooseRandomMeme}>Get a new meme image 🖼</button>
      </div>
      <div className="meme">
        <img src={meme.imageUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
