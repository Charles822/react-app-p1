import {useState} from "react";
import Button from "./components/Button";

function App() {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom']

  });
    
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Pepperoni'] })
  }
    return (
      <div>
        <Button onClick={handleClick}>Change name</Button>
        <p>{console.log({pizza})}</p>
      </div>
    );
}

export default App;
