import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className=" flex items-center justify-center mt-20 relative overflow-hidden">
      <div className="relative  w-full max-w-md p-8 mx-4  backdrop-blur-xl border border-blue-600 rounded-3xl shadow-2xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Welcome <span className="text-blue-400">Back</span>
          </h2>
          <p className="text-gray-600 mt-2">Please enter your details to sign in</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email/UserName*</label>
            <input
              type="email"
              placeholder="@gmail.com"
              className="w-full px-4 py-3 rounded-xl  text-black border-2 placeholder-black focus:ring-blue-500 transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password*</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl  text-black border-2 placeholder-black    transition-all"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-800 cursor-pointer">
              <input type="checkbox" className="mr-2 rounded accent-blue-500" />
              Remember me
            </label>
            <a href="#" className="text-blue-400 hover:text-blue-600 transition">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transform transition active:scale-95"
          >
            Sign In
          </button>
        </form>

        <div className="mt-5">
          <div className="relative flex items-center justify-center mb-6">
            <span className="absolute px-3  text-md text-gray-800 uppercase">Or continue with</span>
            <div className="w-full border-t border-white/10"></div>
          </div>

          <button className="w-full py-2.5 flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition">
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="google" />
            Google
          </button>
        </div>

        <p className="mt-5 text-center text-gray-400 text-sm">
          Don't have an account? 
          <Link  className="ml-1 text-blue-400 font-semibold hover:underline" to="/sign-up">Create Account</Link>
        </p>
      </div>
    </div>
  );
}