import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setBlockUsers } from "./redux/userSlice";

const UserDetail = () => {
  const { userId } = useParams(); // Extract userId from URL
  const [user, setUser] = useState(null); // Initialize user as null
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    const data = await response.json();
    setUser(data); // Update user state with fetched data
  };

  useEffect(() => {
    fetchData();
  }, [userId]); 

  if (!user) {
    return <h1>Loading...</h1>;
  }

  const handleBlockUsers = () => {
    dispatch(setBlockUsers(user))
  }

  return (
    <div>
      <img src={user.image} alt={user.firstName} />
      <h1>
        {user.firstName} {user.lastName}
      </h1>
      <h1>{user.email}</h1>
      <h1>{user.gender}</h1>
      <button onClick={handleBlockUsers}>Block User</button>

      <h1 onClick={() => navigate('/blockUser')}>Check Block Users</h1>
    </div>
  );
};

export default UserDetail;
