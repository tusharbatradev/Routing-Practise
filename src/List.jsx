import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await fetch("https://dummyjson.com/users");
    const json = await data.json();

    setUsers(json.users);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Users updated:", users);
  }, [users]);

  return (
    <div>
      {users.map((user) => (
        <h1
          style={{
            cursor: "pointer",
          }}
          onClick={() => navigate(`/userdetail/${user.id}`)}
        >
          {user.firstName} {user.lastName}
        </h1>
      ))}
    </div>
  );
};

export default List;
