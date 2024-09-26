"use client";
import React from 'react';
import { useGetUsers } from '@/lib/react-query/queries';
import LoaderSpinner from '@/components/Shared/LoaderSpinner';

const Explore = () => {
  
  const { data: users=[], error, isLoading } = useGetUsers();

  if (isLoading) return <LoaderSpinner />;
  if (error) return <div>Error fetching users</div>;

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