import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
    
    const [data,setData]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        password:"",
        cpassword:""
    })
    return (
        <div className=" flex items-center justify-center mt-20 relative overflow-hidden">
            <div className="relative  w-full max-w-xl p-5 mx-4  backdrop-blur-xl border border-blue-600 rounded-3xl shadow-2xl">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold tracking-tight">
                         <span className="text-blue-400">Sign Up</span>
                    </h2>
                    <p className="text-gray-600 mt-2">Please enter your details to sign Up</p>
                </div>

                <form className="space-y-5">

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm text-gray-700">Name*</label>
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-3 py-2 rounded-lg border text-black"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-700">Username*</label>
                            <input
                                type="text"
                                placeholder="Username"
                                className="w-full px-3 py-2 rounded-lg border text-black"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm text-gray-700">Email*</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-3 py-2 rounded-lg border text-black"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-700">Phone*</label>
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full px-3 py-2 rounded-lg border text-black"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <label className="text-sm text-gray-700">Password*</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-3 py-2 rounded-lg border text-black"
                            />
                        </div>

                        <div>
                            <label className="text-sm text-gray-700">Confirm*</label>
                            <input
                                type="password"
                                placeholder="Confirm"
                                className="w-full px-3 py-2 rounded-lg border text-black"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl"
                    >
                        Sign Up
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

                <p className="mt-5 text-center text-gray-400 text-md">
                    You have an account please?
                    <Link className="ml-1 text-blue-400 font-semibold hover:underline" to="/login">Login Account</Link>
                </p>
            </div>
        </div>
    );
}