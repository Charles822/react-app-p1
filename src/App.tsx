import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Lyon", "La Rochelle", "Hong Kong"];
  
  return <div><ListGroup items={items} heading="Cities" /></div>

}

export default App;