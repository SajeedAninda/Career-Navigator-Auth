import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AuthContext } from '../../Auth/AuthProvider';

const Navbar = () => {
    let { currentUser,logOut } = useContext(AuthContext);
    let handleLogout = () => {
        logOut().then(() => {
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div>
            <nav className='py-6 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center'>
                <div>
                    <Link to={`/`}><h1 className='text-[#1A1919] font-extrabold text-xl md:text-2xl lg:text-3xl'>Career<span className='text-[#85D7A9]'>Navigator</span></h1></Link>
                </div>
                <div className='flex gap-6 text-lg'>
                    <NavLink
                        to={`/`}
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#85D7A9] underline font-bold" : ""}>
                        Home
                    </NavLink>
                    <NavLink
                        to={`/statistics`}
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#85D7A9] underline font-bold" : ""}>
                        Statistics
                    </NavLink>
                    <NavLink
                        to={`/appliedjobs`}
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#85D7A9] underline font-bold" : ""}>
                        Applied Jobs
                    </NavLink>
                    <NavLink
                        to={`/blogs`}
                        className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#85D7A9] underline font-bold" : ""}>
                        Blogs
                    </NavLink>
                </div>
                {
                    currentUser ?
                        <div className='flex items-center gap-2'>
                            {currentUser && <p>{currentUser.email}</p>}
                            <button onClick={handleLogout} className='px-4 py-3 rounded-lg font-bold bg-[#85D7A9] text-white'>Log Out</button>
                        </div>
                        :
                        <div className='flex items-center gap-2'>
                            {currentUser && <p>{currentUser.email}</p>}
                            <Link to={"/login"}><button className='px-4 py-3 rounded-lg font-bold bg-[#85D7A9] text-white'>Login</button></Link>
                        </div>
                }


            </nav>
        </div>
    );
};

export default Navbar;