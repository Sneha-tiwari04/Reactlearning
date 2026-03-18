import { useState } from "react"

function Login(){

  let [loginval, setloginval] = useState({
    email: "",
    password: ""
  })

  function logininput(e){
    let { name, value } = e.target
    setloginval({ ...loginval, [name]: value })
  }

  function loginsubmit(e){
    e.preventDefault()

    let localdata = JSON.parse(localStorage.getItem("userdata"))

    if(!localdata){
      alert("Please signup first")
      return
    }

    if(
      loginval.email !== localdata.email ||
      loginval.password !== localdata.password
    ){
      alert("User not found")
    } else {
      alert("Login successfully")
    }
  }

  return(
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      <form 
        className="bg-white p-8 rounded-2xl shadow-lg w-80"
        onSubmit={loginsubmit}
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={logininput}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={logininput}
            className="w-full border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Login
        </button>

      </form>

    </div>
  )
}

export default Login