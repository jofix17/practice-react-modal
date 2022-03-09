import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const saveUserhandler = (uName, uAge) => {
    setUsers((prevUserList) => [
      ...prevUserList,
      { username: uName, age: uAge, id: Math.random().toString() },
    ]);
  };

  return (
    <div>
      <AddUser onAddUser={saveUserhandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
