import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Adminhome from './Components/Admin/Adminhome';
import Adminjob from './Components/Admin/Adminjob';
import Adminnav from './Components/Admin/Adminnav';
import AdminCompanyhome from './Components/Admin/AdminCompanyhome';
import Adminsidebar from './Components/Admin/Sidebar/Adminsidebar';

const Login = lazy(() => import("./Components/Login/Login"));
const Register = lazy(() => import("./Components/Register/Register"));

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/register" exact element={<Register/>} />
          <Route path="/adminhome" exact element={<Adminhome/>} />
          <Route path="/adminjob" exact element={<Adminjob/>} />
          <Route path="/admincompany" exact element={<AdminCompanyhome/>} />
          <Route path="/adminnav" exact element={<Adminnav/>} />
          <Route path="/adminnsidebar" exact element={<Adminsidebar/>} />
        </Routes>
      </Suspense>
      </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
