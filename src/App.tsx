import { useState } from "react";
import ProductList from './components/ProductList'


function App() {

  const [category, setCategory] = useState('');

  return (
    <div>
      <select className="form-select">
        <option value=""></option>
        <option value="Clothing">Clothing</option>
        <option value="HouseHold">HouseHold</option>
      </select>
      <ProductList />
    </div>
  );
}

export default App;
