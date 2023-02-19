import { usersList } from "../data/Users";
function Admin({ uservotes }) {
  function didVote(user) {
    if (uservotes[user.email]) {
      return true;
    }
    return false;
  }
  return (
    <table>
      <thead>
        <tr>
          <td>name</td>
          <td>email</td>
          <td>voted?</td>
        </tr>
      </thead>
      <tbody>
        {usersList.map((user) => (
          <tr key={user.email}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{didVote(user) ? "yes" : "no"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Admin;
