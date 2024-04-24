"use client";
import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export const LoginUserForm = () => {
  const { registerUser, loginUser, user } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  
  return (
    <section className="text-gray-400  body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="title-font font-medium text-3xl text-white">
            Slow-carb next level shoindxgoitch ethical authentic, poko scenester
          </h1>
          <p className="leading-relaxed mt-4">
            Poke slow-carb mixtape knausgaard, typewriter street art gentrify
            hammock starladder roathse. Craies vegan tousled etsy austin.
          </p>
        </div>
        <form
          onSubmit={onSubmit}
          className="lg:w-3/6 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <h2 className="text-white text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">Email</label>

            <input
              type="email"
              onChange={onChange}
              value={values.email}
              name="email"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-400">Password</label>

            <input
              type="password"
              onChange={onChange}
              value={values.password}
              name="password"
              className="w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 rounded border border-gray-600 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          {!user.logged ? (
            <div className="flex flex-col">
              <button
                onClick={() => loginUser(values)}
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-2"
              >
                Login
              </button>
              <button
                onClick={() => registerUser(values)}
                className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg "
              >
                Register
              </button>
            </div>
          ) : (
            <h3>Ya estas logieado</h3>
          )}
        </form>
      </div>
    </section>
  );
};
