import Login from "./components/Login";
import "./App.css";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);

  function onLogin(user) {
    setUser(user);
    setLoggedIn(true);
  }
  return <>{isLoggedIn || <Login onLogin={() => onLogin(user)}></Login>};</>;
}

export default App;
