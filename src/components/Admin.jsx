import { usersList } from "../data/Users";
import "./style/Admin.css";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

function Admin({ uservotes, parties, votes }) {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const chartdata = {
    labels: parties.map((party) => party.name),
    datasets: [
      {
        label: "# of Votes",
        data: Object.values(votes),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  function didVote(user) {
    if (uservotes[user.email]) {
      return true;
    }
    return false;
  }
  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-left-section">
        <h2>Users Data</h2>

        <div className="admin-dashboard-table-container">
          <table className="admin-table admin-user-data">
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
        </div>
      </div>
      <Pie data={chartdata} />
    </div>
  );
}

export default Admin;
