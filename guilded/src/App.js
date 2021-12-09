import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./components/auth/protectedRoute";
import Dashboard from "./pages/dashboard/";
import Login from "./pages/landing";

function App() {
  const {user} = useAuth0();
  return (
    <>
    <button onClick={()=>{
      console.log(user)
    }}>Log</button>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        {/* <ProtectedRoute path="/dashboard" element={<Dashboard/>} /> */}
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
