import { useState } from "react";
import { Button } from "./components/Button";
import { Card1 } from "./components/Card1";
import { Card2 } from "./components/Card2";
import { List } from "./components/List";
import { LoadingButton } from "./components/LoadingButton";

function App() {
  const list: string[] = [];
  const list2: string[] = ["Goku", "Tanjiro", "Eren"];
  const addButton = "primary";
  const deleteButton = "danger";

  const [listElements, setListElements] = useState(["Goku", "Tanjiro", "Eren"]);

  const handleSelect = (elemento: string) => {
    console.log(elemento);
  };

  const contenido = list.length ? (
    <List data={list} onSelect={handleSelect} />
  ) : (
    "Sin elementos para mostrar"
  );

  const contenido2 = list2.length !== 0 && (
    <List data={list2} onSelect={handleSelect} />
  );

  const handleAddClick = () => {
    setListElements([...listElements, "Minion"]);
  };
  const handleDeleteClick = () => {
    setListElements(listElements.slice(0, -1));
  };

  return (
    <>
      <div>
        <Card1 />
        <Card2>Hola mundo</Card2>
        <Card2>
          <Card1 />
          <List data={list2} onSelect={handleSelect} />
          {contenido}
          {contenido2}
        </Card2>
        <LoadingButton>Hola mundo</LoadingButton>
      </div>
      <hr />
      <div>
        <Button color={addButton} onClick={handleAddClick}>
          Agregar
        </Button>
        <Button color={deleteButton} onClick={handleDeleteClick}>
          Eliminar
        </Button>
        <List data={listElements} onSelect={handleSelect} />
      </div>
    </>
  );
}

export default App;
