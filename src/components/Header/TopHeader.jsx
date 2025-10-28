import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const TopHeader = () => {
    return (
        <div className="bg-gradient-to-r from-[#6685F5] via-[#8A74F7] to-[#F35E7E] py-2 text-white shadow-md">
            <div className="container mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-2">
                {/* Social Icons */}
                <div className="flex items-center gap-5 text-lg">
                    <a
                        href="#"
                        className="hover:scale-110 hover:text-blue-200 transition-transform duration-200"
                    >
                        <FaFacebook />
                    </a>
                    <a
                        href="#"
                        className="hover:scale-110 hover:text-red-400 transition-transform duration-200"
                    >
                        <FaYoutube />
                    </a>
                    <a
                        href="#"
                        className="hover:scale-110 hover:text-pink-300 transition-transform duration-200"
                    >
                        <FaSquareInstagram />
                    </a>
                    <a
                        href="#"
                        className="hover:scale-110 hover:text-blue-300 transition-transform duration-200"
                    >
                        <FaTwitter />
                    </a>
                </div>

                {/* Top Links */}
                <div className="flex flex-wrap justify-center items-center gap-6 text-[13px] md:text-sm font-semibold">
                    <a
                        href="#"
                        className="hover:text-yellow-200 transition-colors duration-200"
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        className="hover:text-yellow-200 transition-colors duration-200"
                    >
                        Contact Us
                    </a>
                    <a
                        href="#"
                        className="hover:text-yellow-200 transition-colors duration-200"
                    >
                        Success Story
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;
