import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = { email, password };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPassword("");
    } else {
      alert("fill the data");
    }
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div
      style={{
        fontSize: "14px",
        color: "#02475b",
        backgroundColor: "white",
        width: "1064px",
        margin: "auto",
        marginTop: "90px",
        padding: "50px 0px",
      }}
    >
      <form
        action=""
        onSubmit={submitForm}
        style={{
          width: "350px",
          margin: "100px 35% ",
          padding: "5px",
          textAlign: "left",
          boxSizing: "border-box",
          boxShadow: "0 2px 4px 0 gray",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex", margin: "10px 0px 15px 10px" }}>
          <label htmlFor="email" style={{ width: "150px" }}>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ display: "flex", margin: "10px 0px 15px 10px" }}>
          <label htmlFor="password" style={{ width: "150px" }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <a href="/">
          <button
            type="submit"
            onClick={routeChange}
            style={{ margin: "10px 0px 15px 10px" }}
          >
            Login
          </button>
        </a>
      </form>
    </div>
  );
}
