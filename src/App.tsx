import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectCategory, setSelectedCategory] = useState("All Categories");

  return (
    <>
      <ExpenseFilter
        header={selectCategory}
        onHeader={() => setSelectedCategory("All Categories")}
        onGroceries={() => setSelectedCategory("Groceries")}
        onUtilities={() => setSelectedCategory("Utilities")}
        onEntertainment={() => setSelectedCategory("Entertainment")}
      />
      <ExpenseList display='Groceries'/>
    </>
  );
}

export default App;
