import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import Sign from "./Sign"
import Login from "./Login"


function App(){

return(
<>
 <Navbar />
<Routes>
     
    <Route  index element={<Home />} />
    <Route path="/" element={<Sign/>}/>
    <Route path="/Login" element={<Login/>}/>
    

</Routes>
</>
)

}

export default App