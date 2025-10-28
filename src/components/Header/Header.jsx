import logo from "../../assets/log.jpg";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
    const links = (
        <>
            <li className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-all cursor-pointer">
                Home
            </li>
            <li className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-all cursor-pointer">
                Success Story
            </li>
            <li className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-all cursor-pointer">
                About
            </li>
            <li className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-all cursor-pointer">
                Contact Us
            </li>
        </>
    );

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="navbar container mx-auto px-5 py-3 flex justify-between items-center">
                {/* Left Section - Logo & Mobile Menu */}
                <div className="flex items-center gap-3">
                    {/* Mobile Dropdown */}
                    <div className="dropdown lg:hidden">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost text-gray-600 hover:text-orange-500"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white rounded-xl w-52 text-center space-y-2"
                        >
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Logo"
                        className="w-[140px] md:w-[160px] object-contain"
                    />
                </div>

                {/* Center Section - Navigation */}
                <nav className="hidden lg:flex">
                    <ul className="menu-horizontal flex gap-8 items-center">{links}</ul>
                </nav>

                {/* Right Section - Search & Button */}
                <div className="flex items-center gap-4">
                    {/* Search */}
                    <div className="relative hidden md:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="input input-bordered rounded-full pl-10 pr-4 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                        <IoIosSearch className="absolute left-3 top-2 text-gray-500 text-lg" />
                    </div>

                    {/* Button */}
                    <button className="btn bg-orange-500 text-white border-none hover:bg-orange-600 px-5 rounded-full">
                        Join Us
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
