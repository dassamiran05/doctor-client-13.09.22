import React from 'react';
import {Link, Outlet} from 'react-router-dom'

const Dashboard = () => {
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
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">Sidebar Item 1</Link></li>
                    <li><Link to="/dashboard/review">Sidebar Item 2</Link></li>        
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Dashboard;