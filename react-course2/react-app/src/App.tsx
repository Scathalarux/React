import { Card1 } from "./components/Card1";
import { Card2 } from "./components/Card2";
import { List } from "./components/List";

function App() {
  const list = [
    'Goku',
    'Tanjiro',
    'Eren'
  ];

  return (
    <>
      <Card1 />
      <Card2>Hola mundo</Card2>
      <Card2>
        <Card1 />
        <List data={list}/>
      </Card2>
    </>
  );
}

export default App;
