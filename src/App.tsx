import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  
  const defaultItems = [
    { description: "Milk", amount: 5, categories: "Groceries" },
    { description: "Soap", amount: 2, categories: "Utilities" },
  ];

  const [items, setItems] = useState(defaultItems)

  const [selectCategory, setSelectedCategory] = useState("All Categories");

  const handleFilterAllCategories = () => {setItems(defaultItems)};

  const handleFilterCategory = (category) => {
    setItems(defaultItems.filter(item => item.categories === category));
  };

  const handleDeleteItem = (item: object) => {
    setItems(items.filter(itemToKeep => itemToKeep !== item));
  }

  return (
    <>
      <ExpenseFilter
        header={selectCategory}
        onHeader={() => {
          setSelectedCategory("All Categories"); 
          handleFilterAllCategories();

        }}
        
        onGroceries={() => {
          setSelectedCategory("Groceries");
          handleFilterCategory("Groceries");
          
        }}
        onUtilities={() => {
        setSelectedCategory("Utilities");
        handleFilterCategory("Utilities");

      }}
        onEntertainment={() => {
          setSelectedCategory("Entertainment");
          handleFilterCategory("Entertainment");
        }}
      />
      <ExpenseList items={items} onClear={handleDeleteItem} />
    </>
  );
}

export default App;
