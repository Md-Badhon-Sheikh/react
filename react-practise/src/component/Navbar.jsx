import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-none z-[2] mt-3 w-52 p-2 "
            >
                <li className="font-semibold text-xl">
              <NavLink to="/"> Home</NavLink>
            </li>
            <li className="font-semibold text-xl">
              <NavLink to = '/Blog'>Blog</NavLink>
            </li>
            <li className="font-semibold text-xl">
              <NavLink to = '/About'>About</NavLink>
            </li>
            <li className="font-semibold text-xl">
              <NavLink to = '/Contact'>Contact</NavLink>
            </li>
            </ul>
          </div>
        
        </div>
        <div className=" hidden lg:flex w-full mx-auto">
          <ul className=" menu-horizontal px-1">
            <li className="py-2 px-4 font-semibold text-xl">
              <NavLink to="/"> Home</NavLink>
            </li>
            <li className="py-2 px-4 font-semibold text-xl">
              <NavLink to = '/Blog'>Blog</NavLink>
            </li>
            <li className="py-2 px-4 font-semibold text-xl">
              <NavLink to = '/About'>About</NavLink>
            </li>
            <li className="py-2 px-4 font-semibold text-xl">
              <NavLink to = '/Contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
