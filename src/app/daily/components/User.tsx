"use client";
import { useState, useEffect } from "react";

type User = {
  2021: number | null;
  2022: number | null;
  2023: number | null;
  2024: number | null;
  name: string;
  id: number;
};

function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/api/user")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // データをコンソールに表示
        setUser(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {user.map((u: User) => {
        return <p>{u.id}</p>;
      })}
    </div>
  );
}

export default User;
