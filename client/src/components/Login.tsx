import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";

const Login = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const checkLocalStorage = () => {
    const user = localStorage.getItem("User");
    if (user) {
      setLoggedIn(true);
    }
  };
  useEffect(() => {
    checkLocalStorage();
    if (loggedIn) {
      navigate("/dashboard");
    }
    return () => {
      setUsername("");
      setPassword("");
    };
  }, [loggedIn, navigate]);

  const handleLogin = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const result = await login(username, password);
    if (result) {
      setLoggedIn(true);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-form">
      <h1>Login</h1>
      <form onSubmit={(e) => {}}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={(e) => handleLogin(e)}>Submit</button>
      </form>

      <div className="register-link">
        <p>Don't have an account?</p>
        <a href="/register">Register</a>
      </div>
    </div>
  );
};

export default Login;
