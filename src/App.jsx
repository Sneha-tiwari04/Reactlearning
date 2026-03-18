import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import Sign from "./Sign"
import Login from "./Login"


function App(){

return(


<Routes>
    {/* <Route path = "/" element = { <Navbar /> }/>  */}
    <Route path="/" element={<Home />} />
    <Route path="/" element={<Sign/>}/>
    <Route path="/Login" element={<Login/>}/>
    

</Routes>

)

}

export default App