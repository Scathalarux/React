import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0,y:0});

  useEffect(() => {

    const handleMove = (event: PointerEvent)=>{
      const {clientX, clientY} =event;
      setPosition({x: clientX, y: clientY});
    }
    if(enabled){
      window.addEventListener('pointermove', handleMove);
    }
    

    return ()=>{
      window.removeEventListener('pointermove', handleMove);
    };
    
  }, [enabled]);

  return (
    <main>
      <div className="bolita" style={{transform:`translate(${position.x}px,${position.y}px)`}}/>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir el puntero
      </button>
    </main>
  );
}

export default App;
