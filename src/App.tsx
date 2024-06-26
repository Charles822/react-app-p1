import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {

    const res = await 
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/xusers")
      .then((res) => console.log(setUsers(res.data)))
      .catch(err => console.log(setError(err.message)));
  }, [])

  return (
    <>
    {error && <p className="text-danger">{error}</p>}
    <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>
    </>
  );
}

export default App;
