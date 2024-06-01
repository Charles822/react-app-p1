import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "San Fransisco"]
    return (
      <div>
        <ListGroup heading="Miami" items={items} onSelectItem={() => console.log(item)}></ListGroup>
      </div>
    );
}

export default App;
