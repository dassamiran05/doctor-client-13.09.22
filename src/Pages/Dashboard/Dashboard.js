import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Link, Outlet} from 'react-router-dom'
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

    const [user]  = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* <!-- Page content here --> */}
                    <h2 className='text-3xl font-bold text-purple-500'>Welcome to Dashboard</h2>
                    <Outlet></Outlet>
                    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        <li><Link to="/dashboard/review">My Reviews</Link></li>        
                        {admin && <>
                            <li><Link to="/dashboard/users">All Users</Link></li>
                            <li><Link to="/dashboard/adddoctor">Add Doctor</Link></li>
                            <li><Link to="/dashboard/managedoctor">Manage Doctor</Link></li>
                        </>}        
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;