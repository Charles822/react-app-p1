import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseForm from "./components/ExpenseForm";

let allItems = [];

function App() {

  const [items, setItems] = useState(allItems);

  const [selectCategory, setSelectedCategory] = useState("All Categories");

  const handleFilterAllCategories = () => {
    setItems(allItems);
  };

  const handleFilterCategory = (category) => {
    setItems(allItems.filter((item) => item.categories === category));
  };

  const handleDeleteItem = (item: object) => {
    allItems = allItems.filter((itemToKeep) => itemToKeep !== item)
    setItems(items.filter((itemToKeep) => itemToKeep !== item));
    
  };

  const handleAddItem = (data: object) => {
    allItems = [...allItems, data];
    if (selectCategory === data.categories || selectCategory === "All Categories")
      setItems([...items, data]);
    

  };

  return (
    <>
      <ExpenseForm onTransfer={handleAddItem} />

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
