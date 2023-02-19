import Login from "./components/Login";
import "./App.css";
import { useState } from "react";
import VotingPage from "./components/VotingPage";

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setLoggedIn] = useState(false);

  function login(user) {
    setUser(user);
    setLoggedIn(true);
  }

  function logout() {
    setUser(null);
    setLoggedIn(false);
  }
  console.log(user);
  return (
    <>
      {isLoggedIn || <Login onLogin={login}></Login>}
      {isLoggedIn && <VotingPage user={user} onLogout={logout}></VotingPage>}
    </>
  );
}

export default App;
