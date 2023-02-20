import { useState } from "react";
import getUser from "../data/Users";
import Popup from "./Popup";
import "./style/Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const user = getUser(email, password);
    if (user) {
      onLogin(user);
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email:</label>
        <input
          autoComplete="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          autoComplete="current-password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {showPopup && (
        <Popup
          message="Invalid login credentials. Please check your email and password and try again"
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default Login;
