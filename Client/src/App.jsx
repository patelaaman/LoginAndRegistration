import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import Context from "./Pages/Context"
import Login from "./Pages/Login"
import Registration from "./Pages/Registration"
import Dashboard from "./Pages/Dashboard"

function App() {
  

  return (
    <>
     <BrowserRouter>
         <Routes>
             <Route path="/" element={<Layout></Layout>}>
             <Route index element={<Home></Home>}></Route>
                <Route path="home" element={<Home></Home>}></Route>
                <Route path="context" element={<Context></Context>}></Route>        
                <Route path="login" element={<Login></Login>}></Route>
                <Route path="regis" element={<Registration></Registration>}></Route>
                <Route path="dashboard" element={<Dashboard></Dashboard>}></Route>

             </Route>
         </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
