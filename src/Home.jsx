import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h2>This is Home page</h2>
      <button onClick={() => navigate('/browseList')}>Check Users</button>
    </div>
  )
}

export default Home
