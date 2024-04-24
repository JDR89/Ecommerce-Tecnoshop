import Link from "next/link";
import ClientLoWidget from "./ClientLogWidget";
import { CartWidget } from "../cart/CartWidget";

export const Navbar = () => {

  const navLinks=[
    {
      name:"Home",
      path:"/"
    },
    {
      name:"Productos",
      path:"/productos/todo"
    },
    {
      name:"Nosotros",
      path:"/nosotros"
    }
    
  ]

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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {
              navLinks.map((link)=>(
                <li key={link.name}>
                  <Link href={link.path}>{link.name}</Link>
                </li>
              ))
            }
            
           
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">TecnoShop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {
          navLinks.map((link)=>(
            <li key={link.name}>
              <Link className="uppercase" href={link.path}>{link.name}</Link>
            </li>
          ))
         }
        </ul>
      </div>
      <div className="navbar-end">
        <CartWidget />
        <ClientLoWidget />
      </div>
    </div>
  );
};
