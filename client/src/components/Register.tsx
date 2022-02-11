import { register } from "../services/auth.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../todo.model";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const newUser: User = {
      username,
      password,
      email,
    };
    register(newUser);
    navigate("/");
  };

  return (
    <div className="login-form">
      <h1>Register</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
