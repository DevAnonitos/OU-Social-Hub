import React from 'react';
import AdminSideBarItems from './AdminSideBarItems';

const AdminSideBar = () => {
  return (
    <div className='admin-left_sidebar'>
      <div className='mt-2'>
        <AdminSideBarItems />
      </div>
    </div>
  );
};

export default AdminSideBar;