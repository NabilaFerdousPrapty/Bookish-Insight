import { Link } from "react-router-dom";
import '../../../assets/style.css'
const Navbar = () => {
  return (
    <div className="navbar ">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 work-sans-semiBold"
          >
            <li className=""><Link to='/'>Home</Link></li>
         <li><Link to='/listedBooks'>Listed Books</Link></li>
         <li><Link to='/PagesToRead'>Pages to Read</Link></li>
         <li><Link to='/subscribe'>Subscribe for more</Link></li>
         <li><Link to='/Reviews' >All Reviews</Link></li>
            <li>
            <button className="btn bg-[#23BE0A] text-white">Sign In</button>
       
            </li>
            <li> <button className="btn bg-[#59C6D2] text-white">Sign Up</button></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 work-sans-semiBold">
         <li><Link to='/'>Home</Link></li>
         <li><Link to='/listedBooks'>Listed Books</Link></li>
         <li><Link to='/PagesToRead'>Pages to Read</Link></li>
         <li><Link to='/subscribe'>Subscribe for more</Link></li>
         <li><Link to='/Reviews' >All Reviews</Link></li>

        </ul>
      </div>
      <div className="navbar-end hidden md:flex md:gap-4">
        <button className="btn bg-[#23BE0A] text-white">Sign In</button>
        <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
