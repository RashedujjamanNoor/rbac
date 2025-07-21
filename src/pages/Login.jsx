import React, { useState } from "react";
import { Link } from "react-router-dom";
import { post } from "../services/ApiEndPoint";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const request = await post("/api/auth/login", {
        email,
        password,
      });
      const res = await request.data;

      if (request.status == 200) {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-slate-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white pb-4 flex flex-col justify-center items-center w-96 rounded-lg shadow-lg gap-4"
      >
        <h1 className="font-bold text-2xl my-4">Login</h1>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="font-medium text-base text-gray-800"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            id="email"
            className="bg-slate-100 outline-none px-2 py-1 rounded-sm text-sm font-semibold text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="font-medium text-base text-gray-800"
          >
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            id="password"
            className="bg-slate-100 outline-none px-2 py-1 rounded-sm text-sm font-semibold text-gray-600"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 px-8 py-2 rounded-full text-base font-bold text-white hover:transform hover:scale-105 transition-all duration-500 cursor-pointer"
        >
          Submit
        </button>
        <p className="text-xs text-gray-600 font-medium">
          Don't have account?{" "}
          <Link className="font-bold text-blue-500" to={"/register"}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
