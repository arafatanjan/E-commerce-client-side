import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';

const DashboardContainer = () => {
    const { user, logout } = useAuth();
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <Outlet></Outlet>


            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 w-30 bg-base-100 text-base-content">
                    <li><Link to="dashboard/payment" className='btn btn-primary btn-sm mb-3'>Payment</Link></li>
                    <li><Link to="/dashboard" className='btn btn-primary btn-sm mb-3'>My orders</Link></li>
                    <li><Link to="dashboard/reviews" className='btn btn-primary mb-3 btn-sm'>Review</Link></li>
                    <li>
                        <button onClick={logout} className='btn btn-primary    btn-sm text-decoration-none mt-0 pt-0'>Logout</button></li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardContainer;