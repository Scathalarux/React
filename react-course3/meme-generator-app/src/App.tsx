import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [memes, setMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) =>setMemes(data.data.memes));
  }, []);

  return (
    <>
      <Header />
      <Main memes={memes} />
    </>
  );
}

export default App;
