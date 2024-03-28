import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Best Offers", path: "#" },
  { name: "Services", path: "#" },
  { name: "Contact Us", path: "#" },
];

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeNavbar = () => setClick(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white z-10 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <Link to="/" className="text-primary font-montez text-[25px] md:text-[30px] font-bold tracking-wide">
           Mimozo
        </Link>

        <ul className={`h-[200px] md:h-[50px] z-200 top-0 right-0 bg-opacity-95 bg-blur fixed flex flex-col justify-center items-center text-leading-6 md:static md:flex-row md:space-x-8 ${click ? 'absolute md:static bg-white right-0 top-full w-full md:w-auto md:bg-transparent overflow-y-auto transition duration-300 ease-in-out' : 'hidden lg:flex'}`}>
          {navLinks.map((link) => (
            <li key={link.name} className="block md:inline-block transition-all duration-300 px-5 py-1 mt-2 mb-2 rounded-lg">
              <Link
                className="text-primary font-medium transition-all duration-300 hover:text-secondary"
                to={link.path}
                onClick={closeNavbar}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center md:hidden">
          <button className="text-gray-700 hover:text-primary focus:outline-none" onClick={handleClick}>
            {click ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <div className="btn-group hidden md:flex">
          <button className="btn bg-primary text-white py-2 px-4 hover:opacity-90 transition-all duration-300 rounded-md focus:outline-none">
            Login
          </button>
          <button className="btn bg-gray-300 text-primary py-2 px-4 mx-4 hover:opacity-90 transition-all duration-300 rounded-md focus:outline-none">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;