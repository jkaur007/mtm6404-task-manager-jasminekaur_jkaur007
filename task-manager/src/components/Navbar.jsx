import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">Task Manager</h1>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Tasks</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
