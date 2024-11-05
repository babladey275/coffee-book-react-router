import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-5 space-y-4 shadow"
          >
            <Link to="/">Home</Link>
            <Link to="/coffees">Coffees</Link>
            <Link to="/dashboard">Dashboard</Link>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">Coffee Book</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <Link to="/">Home</Link>
          <Link to="/coffees">Coffees</Link>
          <Link to="/dashboard">Dashboard</Link>
        </ul>
        <Link className="btn btn-ghost text-xl block md:hidden">
          Coffee Book
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
