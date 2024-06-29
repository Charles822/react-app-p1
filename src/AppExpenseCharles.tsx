import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/Charles-version/ExpenseList";
import ExpenseFilter from "./expense-tracker/Charles-version/ExpenseFilter";
import ExpenseForm from "./expense-tracker/Charles-version/ExpenseForm";
import Stack from '@mui/material/Stack';

let allItems = [];

function App() {

  const [items, setItems] = useState(allItems);

  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleFilterAllCategories = () => {
    setItems(allItems);
  };

  const handleFilterCategory = (value: string) => {
    setSelectedCategory(value);
    if (value === "All Categories") {
      setItems(allItems);
    }

    else {
      setItems(allItems.filter((item) => item.categories === value));
    }
  };

  const handleDeleteItem = (item: object) => {
    allItems = allItems.filter((itemToKeep) => itemToKeep !== item)
    setItems(items.filter((itemToKeep) => itemToKeep !== item));
    
  };

  const handleAddItem = (data: object) => {
    allItems = [...allItems, data];
    if (selectedCategory === data.categories || selectedCategory === "All Categories")
      setItems([...items, data]);
    

  };

  return (
    <Stack spacing={5}>
      <ExpenseForm onTransfer={handleAddItem}/>

      <ExpenseFilter
        category={selectedCategory}
        onSelect={handleFilterCategory}
      />
      <ExpenseList items={items} onClear={handleDeleteItem} />
    </Stack>
  );
}

export default App;
