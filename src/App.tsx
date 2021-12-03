import UserForm from "./components/NewUser/UserForm";
import Card from "./components/UI/Card";
import UsersList from "./components/Users/UsersList";
import User from "./models/Users";
import {useState} from 'react'


const App = () => {
    const [users, setUsers] = useState([new User("Max", 31), new User("Fred", 45)]);

    const addUserHandler = (user: User) => {
      setUsers((prevUsers) => {
        return [...prevUsers, user];
      });
    };

  return (
    <div>
      <h1>Dynamic user list</h1>
      <Card>
        <UserForm onUserAdded={addUserHandler} />
      </Card>
      <Card>
        <UsersList users={users} />
      </Card>
    </div>
  );
};
export default App;
