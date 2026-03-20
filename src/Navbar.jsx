import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-gray-100">
      
      
      <div className="flex gap-6 items-center">
        <h1 className="text-xl font-bold">icon</h1>
        <p>Store</p>
        <p>Mac</p>
        <p>iPhone</p>
        <p>iPad</p>
        <p>AirPods</p>
        <p>TV&Home</p>
        <p>Entertainment</p>
        <p>Support</p>
      </div>

     
      <div className="flex gap-4">
        <Link to="/" className="text-blue-500">Login</Link>
        <Link to="/signup" className="bg-blue-500 text-white px-4 py-1 rounded">
          Sign
        </Link>
        
      </div>
    </div>
   
  );
}

export default Navbar;