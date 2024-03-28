import { useState } from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
   const navLinks = [
  { name: "Home", path: "/" },
  { name: "Best Offers", path: "#" },
  { name: "Services", path: "#" },
  { name: "Contact Us", path: "#" },
  
];
  let [open, setOpen] = useState(false);
  
  return (
    <header className="bg-white top-0 left-0 fixed z-50 w-full">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-primary" href="#">
          <span className="sr-only">Home</span>
        <Link to="/" className="font-montez font-bold text-[38px]">Mimozo</Link>
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
          <li key={link.name}>
            <Link to={link.path} className="text-primary font-medium text-[15px] transition hover:text-secondary">
              {link.name}
            </Link>
          </li>
        ))}
          </ul>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="sm:flex sm:gap-4">
          <a
            className="rounded-md bg-primary hover:opacity-90 transition-all duration-500 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="#"
          >
            Login
          </a>

          <div className="hidden sm:flex">
            <a
              className="rounded-md bg-gray-400 px-5 py-2.5 text-sm font-medium text-primary"
              href="#"
            >
              Register
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button className="rounded p-2 text-gray-600 transition hover:text-gray-600/75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default Nav