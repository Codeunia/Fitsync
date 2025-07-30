import React from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ activeTab, handleTabClick, handleLogout, menuOpen, setMenuOpen }) => {
  const tabs = ["dashboard", "workout", "meals", "profile"];

  return (
    <nav className="bg-white shadow px-6 py-4 sticky top-0 z-20">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-indigo-700">🏋️ FitSync</h1>
        <div className="hidden md:flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-4 py-1 rounded-full transition font-medium ${
                activeTab === tab ? "bg-indigo-100 text-indigo-700" : "text-indigo-700 hover:bg-indigo-50"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
          <button
            onClick={handleLogout}
            className="bg-indigo-600 text-white px-4 py-1 rounded-full shadow hover:bg-indigo-700"
          >
            Logout
          </button>
        </div>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-indigo-700"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`md:hidden flex flex-col gap-2 transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-screen mt-3" : "max-h-0"
        }`}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`px-4 py-2 rounded transition font-medium text-left ${
              activeTab === tab ? "bg-indigo-100 text-indigo-700" : "text-indigo-700 hover:bg-indigo-50"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
        <button
          onClick={handleLogout}
          className="bg-indigo-600 text-white px-4 py-2 rounded shadow hover:bg-indigo-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
