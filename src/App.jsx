import Login from "./components/Login";
import "./App.css";
import { useState } from "react";
import VotingPage from "./components/VotingPage";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const parties = [
    {
      id: 1,
      name: "Party A",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Party B",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Party C",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Party D",
      image: "https://via.placeholder.com/150",
    },
  ];

  function login(user) {
    setUser(user);
    setLoggedIn(true);
  }

  function logout() {
    setUser(null);
    setLoggedIn(false);
  }
  return (
    <>
      {isLoggedIn || <Login onLogin={login}></Login>}
      {isLoggedIn && (
        <VotingPage
          user={user}
          onLogout={logout}
          parties={parties}
        ></VotingPage>
      )}
    </>
  );
}

export default App;
