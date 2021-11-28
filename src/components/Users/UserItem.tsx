import User from "../../models/Users";

interface UserItemProps {
  user: User;
}

const UserItem = ({user}: UserItemProps) => {
    return <li>{user.username} ({user.age} years old)</li>
}
export default UserItem;