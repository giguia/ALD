import React from 'react'
import Sidebar from '../admin component/Sidebar';
import UserHome from '../user pages/UserHome';
import UserFields from '../user components/UserFields';
const AdminUsers = () => {
    return (
        <div className="tlpages">
            <Sidebar />
            <UserFields/>
            <UserHome/>

            <p>Users Page</p>
        </div>
    );
}

export default AdminUsers
