import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer" ;
import Admin from "./Components/Admin";
import Login from "./Components/Login";
import Signup from "./Components/Signup" ;
import Home from "./Components/Home";
import Counter from "./Components/Counter" ;








function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<h1>Store Page</h1>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Admin" element={<Admin/>} />
        <Route path="/Counter" element={<Counter/>} />


        

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;