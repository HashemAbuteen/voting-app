import { useState } from "react";
import getUser from "../data/Users";
import Popup from "./Popup";
import "./Login.css";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    const user = getUser(email, password);
    console.log(user);
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
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {showPopup && (
        <Popup
          message="Email and password do not match any user."
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default Login;
