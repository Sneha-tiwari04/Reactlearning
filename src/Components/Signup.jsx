import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // 1. Pehle se saved users ko nikalna (agar koi ho)
    const existingUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

    // 2. Check karna ki email pehle se register toh nahi hai
    const isUserExist = existingUsers.find(user => user.email === email);
    if (isUserExist) {
      alert("Email already registered! Please Login.");
      return;
    }

    // 3. Naya user object banana
    const newUser = { name, email, password };

    // 4. Sabhi users ko wapas LocalStorage mein save karna
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("allUsers", JSON.stringify(updatedUsers));

    alert("Signup Successful! Ab login karein.");
    navigate("/login"); // Signup ke baad Login page par bhej dena
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f5f5f7]">
      <form onSubmit={handleSignup} className="bg-white p-10 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <input 
          type="text" placeholder="Full Name" 
          className="w-full p-3 border rounded-lg mb-4"
          value={name} onChange={(e) => setName(e.target.value)} required 
        />
        <input 
          type="email" placeholder="Email" 
          className="w-full p-3 border rounded-lg mb-4"
          value={email} onChange={(e) => setEmail(e.target.value)} required 
        />
        <input 
          type="password" placeholder="Password" 
          className="w-full p-3 border rounded-lg mb-6"
          value={password} onChange={(e) => setPassword(e.target.value)} required 
        />
        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Signup
        </button>
        <p className="mt-4 text-center text-sm">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup; // Export zaroori hai