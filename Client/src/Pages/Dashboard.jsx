import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Dashboard=()=>{
const [username, setUsername]= useState("");
const [useremail, setUseremail]=useState("");
const navigate= useNavigate();

 useEffect(()=>{
    const userName= localStorage.getItem("name");
    const userEmail= localStorage.getItem("email");
    
    if (!userName)
    {
      navigate("/login");
    }


    setUsername(userName);
    setUseremail(userEmail);
 }, [])


 const logout=()=>{
   localStorage.clear();
   navigate("/login");
 }


    return(
        <>
          <h1> User DashBoard</h1>
          <h3> Welcome : {username} Email: {useremail}</h3>
          <button onClick={logout}>Logout</button>
        </>
    )
}
export default Dashboard;