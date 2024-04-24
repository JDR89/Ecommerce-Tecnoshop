"use client"
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export const LoginForm = () => {

  const{loginUser,loginAdmin}=useAuthContext()

  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const onChange = ({ target }) => {
    const { name, value } = target
    setValues({
      ...values,
      [name]: value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    
  }

  return (
    <section className="text-gray-400  body-font">

      <div className="container px-5 py-24 mx-auto flex justify-center items-center ">

       
        <form onSubmit={onSubmit} className="  bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col mt-10 md:mt-0 ">
          <h2 className="text-white text-lg font-medium title-font mb-5">
            Sign in
          </h2>
          <div className="relative mb-4">

            <label  className="leading-7 text-sm text-gray-400">
              Email
            </label>
           
            <input
              type="email"
              onChange={onChange}
              value={values.email}
              name="email"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />

          </div>
          <div className="relative mb-4">

            <label  className="leading-7 text-sm text-gray-400">
              Password
            </label>

            <input
              type="password"
              onChange={onChange}
              value={values.password}
              name="password"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            
          </div>

          <button
          onClick={()=>loginAdmin(values)}
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Login
          </button>


        </form>
      </div>
    </section>
  );
};
