import React from 'react';


const Header = () => {
    const link = (
        <div className='flex flex-col lg:flex-row items-center gap-8'>
            <li className='text-sm font-bold hover:text-orange-500 transition cursor-pointer'>Home</li>
            <li className='text-sm font-bold hover:text-orange-500 transition cursor-pointer'>Success Stor</li>
            <li className='text-sm font-bold hover:text-orange-500 transition cursor-pointer'>About</li>
            <li className='text-sm font-bold hover:text-orange-500 transition cursor-pointer'>Contact Us</li>
        </div>
    )
    return (
        <div className='bg-slate-100 shadow-xl'>
            <div className="navbar  shadow-sm flex justify-around container px-7">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <img src='logo' alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul>
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-orange-500 px-5">Join Us</a>
                </div>
            </div>
        </div>
    );
};

export default Header;