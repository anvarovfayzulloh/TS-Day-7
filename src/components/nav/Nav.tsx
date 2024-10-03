import { TbJewishStar } from "react-icons/tb"; 
import { AiOutlineHome } from "react-icons/ai"; 
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav className="bg-gray-800 w-full ">
            <div className='flex justify-between items-center max-w-[1440px] m-auto px-10 py-3' >
                <NavLink to="/" className="flex items-center p-2 text-white">
                    DummyJSON
                </NavLink>
                <ul className='flex' >
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? 'flex items-center p-2 text-blue-400 bg-gray-800 transition-all duration-300 gap-2 ' : 'flex items-center p-2 text-white  transition-all duration-300 gap-2'  }end>
                        <AiOutlineHome />Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/wishlist" className={({ isActive }) => isActive ? 'flex items-center p-2 text-blue-400 bg-gray-800 transition-all duration-300 gap-2' : 'flex items-center p-2 text-white  transition-all duration-300 gap-2' }end>
                        <TbJewishStar />Wishlist
                    </NavLink>
                </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
