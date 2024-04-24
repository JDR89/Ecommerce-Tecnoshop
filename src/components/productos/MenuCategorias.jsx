"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const manuLinks=[
  {
    name:"Auriculares",
    link:"/productos/auriculares"
  },
  {
    name:"Camaras",
    link:"/productos/camaras"
  },
  {
    name:"Teclados",
    link:"/productos/teclados"
  },
  {
    name:"Mice",
    link:"/productos/mouse"
  },
  {
    name:"Todo",
    link:"/productos/todo"
  },
]
export const MenuCategorias = () => {

  const pathname = usePathname()
  
  return (
    <div className="m-5 flex justify-center">
      <ul className="menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box">
        {
          manuLinks.map((link)=>(
            <li key={link.name}>
              <Link className={pathname === link.link ? "active" : ""} href={link.link}>{link.name}</Link>
            </li>
          ))
        }
     
      </ul>
    </div>
  );
};
