import User from '../../models/Users'
import UserItem from './UserItem';

interface UsersListProps {
  users: User[];
}

const UsersList = ({ users }: UsersListProps) => {
  return <ul>{users.map((value, index) => { return <UserItem key={index} user={value} />})}</ul>
};

export default UsersList;