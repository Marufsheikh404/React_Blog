
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const TopHeader = () => {
    return (
        <div className='flex justify-around items-center bg-gradient-to-tr from-[#6685F5] to bg-[#F35E7E] py-1'>
            <div className='flex items-center gap-8'>
                <FaFacebook />
                <FaYoutube />
                <FaSquareInstagram />
                <FaTwitter />
            </div>
            <div className='hidden lg:block lg:flex items-center gap-6 text-sm font-bold'>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Success Story</p>
            </div>
        </div>
    );
};

export default TopHeader;