import React, { useState, useContext } from "react";
import userContext from "../context/UserContext";

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const{setUser} = useContext(userContext);

  const handleSubmit = (e) => {
         e.preventDefault();
         setUser({username, password});
  }
  
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        placeholder="password"
        value={password}
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}
