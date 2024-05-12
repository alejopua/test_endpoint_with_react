import { useUsers } from "../hooks/useUsers";
const tableHead = ["Id", "Avatar", "Name", "Email"];

export const UsersPage = () => {
  const { users } = useUsers();

  return (
    <div className="container py-4 px-3 mx-auto">
      <h1>Users</h1>
      <hr />
      <table className="table">
        <thead>
          <tr>
            {tableHead.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img
                  className="w-25 rounded-circle"
                  src={user.avatar}
                  alt={user.first_name}
                />
              </td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
