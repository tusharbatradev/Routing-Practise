import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BlockUsers = () => {
  const users = useSelector((state) => state.user);
  const navigate = useNavigate();

  console.log(users);
  return (
    <div>
      <h2 onClick={() => navigate("/browseList")}>Go To Users Page</h2>

      <h1>Blocked Users</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ol>
    </div>
  );
};

export default BlockUsers;
