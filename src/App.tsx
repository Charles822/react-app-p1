import {useState} from "react";
import Button from "./components/Button";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },

  });
    
  const handleClick = () => {
    setGame({ ...game, player: {...game.player, name: 'Rodrigo'} })
  }
    return (
      <div>
        <Button onClick={handleClick}>Change name</Button>
        <p>{console.log({game})}</p>
      </div>
    );
}

export default App;
