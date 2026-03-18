import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Sign(){

  let [signfrm, setFrm] = useState({
    name: "",
    age: "",
    email: "",
    password: ""
  })

  let navigator = useNavigate()

  function inputdata(e){
    const { name, value } = e.target
    setFrm({ ...signfrm, [name]: value })
  }

  function handlesubmit(e){
    e.preventDefault()
    localStorage.setItem("userdata", JSON.stringify(signfrm))
    navigator("/login")
  }

  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <form 
        className="bg-white p-8 rounded-2xl shadow-lg w-96"
        onSubmit={handlesubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={inputdata}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            onChange={inputdata}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={inputdata}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            onChange={inputdata}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
        >
          Sign Up
        </button>

      </form>

    </div>
  )
}

export default Sign