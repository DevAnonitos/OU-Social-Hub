"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const Explore = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const socket = io('http://localhost:4000');

    socket.on('users', (data) => {
      setUsers(data);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
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