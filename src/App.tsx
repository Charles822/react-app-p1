import {useState} from "react";
import Button from "./components/Button";
import ExpandableText from "./components/ExpandableText";

function App() {    
    return (
      <div>
        <ExpandableText maxChars={20}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type 
          specimen book. It has survived not only five centuries, but also the leap into 
          electronic typesetting, remaining essentially unchanged. It was popularised in 
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
          and more recently with desktop publishing software like Aldus PageMaker including 
          versions of Lorem Ipsum.
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