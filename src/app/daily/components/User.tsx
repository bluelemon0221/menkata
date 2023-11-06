"use client";
import { useState, useEffect } from "react";

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // データをコンソールに表示
        setUser(data.users);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User;
