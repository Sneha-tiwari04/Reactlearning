import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

   
    const allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

    // 2. Match dhoondhna
    const user = allUsers.find(u => u.email === email && u.password === password);

    if (user) {
      alert("Welcome back, " + user.name);
      localStorage.setItem("isLoggedIn", "true"); 
      localStorage.setItem("currentUser", JSON.stringify(user)); 
      navigate("/"); // Home page par bhej dena
    } else {
      alert("Invalid Email or Password! Signup karein agar account nahi hai.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#f5f5f7]">
      <form onSubmit={handleLogin} className="bg-white p-10 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
          Login
        </button>
        <p className="mt-4 text-center text-sm">
          Don't have an account? <Link to="/signup" className="text-blue-600">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login; 