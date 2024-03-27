import { Link, NavLink } from "react-router-dom";
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
          <li className='navBar' ><NavLink  to='/'>Home</NavLink></li>
         <li className='navBar'><NavLink  to='/listedBooks'>Listed Books</NavLink></li>
         <li className='navBar'><NavLink to='/PagesToRead'>Pages to Read</NavLink></li>
         <li className='navBar'><NavLink to='/Reviews' >All Reviews</NavLink></li>
         <li className='navBar'><NavLink to='/subscribe'>Subscribe for more</NavLink></li>
         
            <li>
            <button  className="btn bg-[#23BE0A] text-white">Sign In</button>
       
            </li>
            <li> <button className="btn bg-[#59C6D2] text-white">Sign Up</button></li>
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost text-xl p-0 m-0 font-bold">Bookish-Insight</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 work-sans-semiBold">
         <li className='navBar'><NavLink to='/'>Home</NavLink></li>
         <li className='navBar'><NavLink to='/listedBooks'>Listed Books</NavLink></li>
         <li className='navBar'><NavLink to='/PagesToRead'>Pages to Read</NavLink></li>
         <li className='navBar'><NavLink to='/Reviews' >All Reviews</NavLink></li>
         <li className='navBar'><NavLink to='/subscribe'>Subscribe for more</NavLink></li>
        

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
