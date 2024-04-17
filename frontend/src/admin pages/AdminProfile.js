import React from 'react'
import Sidebar from '../admin component/Sidebar';
import Profile from '../admin component/Profile';
const AdminProfile = () => {
    return (
        <div className="EditForm">
            <Sidebar />
            <Profile/>
            <p>Profile Page</p>
        </div>
    );
}

export default AdminProfile
