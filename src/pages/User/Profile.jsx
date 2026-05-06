import { LayoutDashboard, User, LogOut, Lock, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Profile() {
    const [activeTab, setActiveTab] = useState("profile");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [user, setUser] = useState({
        name: "Sunny Kumar",
        email: "sunny@gmail.com",
        phone: "9876543210",
    });

    const [passwordData, setPasswordData] = useState({
        oldPassword: "",
        newPassword: ""
    });

    function handleUpdate() {
        alert("Profile Updated ✅");
    }

    function handlePasswordChange() {
        alert("Password Changed 🔐");
    }

    return (
        <div className=" h-[600px] mx-auto max-w-7xl flex flex-col mt-10 pt-6 md:pt-10 relative">
            <div className="max-w-7xl mx-auto px-3 md:px-6 flex flex-col md:flex-row gap-6">

                <div className="md:hidden flex items-center justify-between bg-white rounded-2xl px-4 py-3 shadow border mt-15">
                    <h2 className="text-lg font-bold text-blue-600">DASHBOARD</h2>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-1">
                        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-40 md:hidden"
                        onClick={() => setIsMenuOpen(false)}
                    />
                )}

                <div className={`
                    fixed md:relative top-0 left-0 h-auto mt-18 md:h-auto z-50
                    w-72 md:w-64 lg:w-72 
                    bg-white md:bg-transparent
                    p-6 md:p-0
                    transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} 
                    md:mt-0
                `}>
                    <div className="mt-10 md:rounded-3xl md:shadow-md md:border p-6 h-full  md:h-auto">
                        <div className="flex items-center gap-3 mb-10">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <LayoutDashboard size={20} className="text-white" />
                            </div>
                            <h2 className="text-xl font-bold text-blue-600">DASHBOARD</h2>
                        </div>

                        <nav className="space-y-2">
                            <button
                                onClick={() => { setActiveTab("profile"); setIsMenuOpen(false); }}
                                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                                    activeTab === "profile" ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-100"
                                }`}
                            >
                                <User size={20} />
                                <span className="font-semibold text-sm">My Profile</span>
                            </button>

                            <button
                                onClick={() => { setActiveTab("password"); setIsMenuOpen(false); }}
                                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                                    activeTab === "password" ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-100"
                                }`}
                            >
                                <Lock size={20} />
                                <span className="font-semibold text-sm">Change Password</span>
                            </button>
                        </nav>

                        <div className="pt-6 mt-6 border-t">
                            <button className="w-full flex items-center gap-4 px-4 py-3 text-gray-500 hover:bg-red-50 hover:text-red-600 rounded-xl transition">
                                <LogOut size={20} />
                                <span className="font-bold text-sm">Logout</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1 md:mt-10">
                    <div className="max-w-2xl mx-auto">
                        {activeTab === "profile" && (
                            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md border">
                                <div className="flex flex-col md:flex-row items-center gap-6 mb-10 text-center md:text-left">
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                                        <p className="text-gray-400">{user.email}</p>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        value={user.name}
                                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                                        className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <input
                                        type="email"
                                        value={user.email}
                                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                                        className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <input
                                        type="text"
                                        value={user.phone}
                                        onChange={(e) => setUser({ ...user, phone: e.target.value })}
                                        className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <button 
                                        onClick={handleUpdate}
                                        className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
                                    >
                                        Update Profile
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "password" && (
                            <div className="bg-white p-6 md:p-10 rounded-3xl shadow-md border">
                                <h3 className="text-xl font-bold mb-6">Change Password</h3>
                                <div className="space-y-4">
                                    <input
                                        type="password"
                                        placeholder="Old Password"
                                        className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        className="w-full border p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                                    />
                                    <button 
                                        onClick={handlePasswordChange}
                                        className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition"
                                    >
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}