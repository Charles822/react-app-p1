import {useState} from "react";
import Button from "./components/Button";
import ExpandableText from "./components/ExpandableText";

function App() {    
    return (
      <div>
        <ExpandableText maxChars={20}>
        Hello world
        </ExpandableText>
      </div>
    );
}

export default App;



// function App() {
//   const [cart, setCart] = useState({
//     discount: .1,
//     items: [
//       { id: 1, title: 'Product 1', quantity: 1 },
//       { id: 2, title: 'Product 2', quantity: 1 }
//       ],

//   });
    
//   const handleClick = () => {
//     setCart({ ...cart, items: cart.items.map(item => item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item) })
//   }
//     return (
//       <div>
//         <Button onClick={handleClick}>Change name</Button>
//         <p>{console.log({cart})}</p>
//       </div>
//     );
// }