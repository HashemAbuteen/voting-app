import { usersList } from "../data/Users";
import "./style/Admin.css";
function Admin({ uservotes, parties, votes }) {
  function didVote(user) {
    if (uservotes[user.email]) {
      return true;
    }
    return false;
  }
  return (
    <div className="admin-dashboard">
      <table className="admin-table admin-user-data">
        <caption>Users Data</caption>
        <thead>
          <tr>
            <td>name</td>
            <td>email</td>
            <td>voted?</td>
          </tr>
        </thead>
        <tbody>
          {usersList.map((user) => (
            <tr
              key={user.email}
              className={
                didVote(user)
                  ? "admin-table-voted-row"
                  : "admin-table-not-voted-row"
              }
            >
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{didVote(user) ? "yes" : "no"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Parties</h3>
      {
        <ul>
          {parties.map((party) => (
            <li key={party.id}>
              {party.name} with {votes[party.id] || 0} votes
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default Admin;
