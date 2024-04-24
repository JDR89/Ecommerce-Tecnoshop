"use client"
import { CiUser } from "react-icons/ci";
import { BiUserCheck } from "react-icons/bi";
import { useAuthContext } from "../context/AuthContext";
import Link from "next/link";

const ClientLoWidget = () => {

    const{logout,user}=useAuthContext()


  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div >
            {
                !user.logged ? <CiUser style={{ width: "auto", height: "25px" }} />
                            : <BiUserCheck style={{ width: "auto", height: "25px" }}/>

            }
        </div>
      </div>
      <ul
        tabIndex={0}
        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        {
            !user.logged ?(<li>
                <Link className="justify-between" href={"/login"}>
                  Login
                </Link>
              </li>)

              :(<li>
                <button onClick={logout}>Logout</button>
              </li>)
        }
        
        
      </ul>
    </div>
  );
};

export default ClientLoWidget;