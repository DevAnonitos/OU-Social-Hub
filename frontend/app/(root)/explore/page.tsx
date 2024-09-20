"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';


const Explore = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const start = performance.now();
        const response = await axios.get('http://localhost:4000/api/v1/users/getusers'); 
        const end = performance.now();
        setUsers(response.data);
        console.log(`Fetch API latency: ${end - start} ms`);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Explore</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user?.id}>{user?.username}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Explore;