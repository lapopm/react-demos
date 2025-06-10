import { useEffect, useState } from "react";

const UserList = () => {
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
  }

  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    const getUserList = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUserList(data);
    };
    getUserList();
  }, []);

  return (
    <div>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <caption>
          <h2>User List</h2>
        </caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.username}</td>
              <td>{u.email}</td>
              <td>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
