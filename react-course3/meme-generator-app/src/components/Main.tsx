import { useState, type ChangeEvent} from "react";

type MainProps ={
  memes: object[]
}
export function Main({memes}:MainProps) {
  const [meme, setMeme] = useState({
    imageUrl: "http://i.imgflip.com/1bij.jpg",
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
  });

  const handleTextChange = (event: ChangeEvent) => {
    const { value, name } = event.target;

    /*if (event.target.name === "topText") {
      setMeme({ ...meme, topText: value });
    } else if (event.target.name === "bottomText") {
      setMeme({ ...meme, bottomText: value });
    }*/

    setMeme({ ...meme, [name]: value });
  };

  const chooseRandomMeme = ()=>{
    const randomNumber = Math.trunc(Math.random() *100);
    const selectedMeme =  memes[randomNumber]

    console.log(selectedMeme);
    setMeme({...meme, imageUrl:selectedMeme.url})
  }

  

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
