import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Adminhome from './Components/Admin/Adminhome';
import Adminjob from './Components/Admin/Adminjob';
import Adminnav from './Components/Admin/Adminnav';
import AdminCompanyhome from './Components/Admin/AdminCompanyhome';
import Adminsidebar from './Components/Admin/Sidebar/Adminsidebar';
import Companyhome from './Components/Home/Companyhome';
import Jobhome from './Components/Home/Jobhome';
import Applycard from './Components/Home/Applycard/Applycard';
import Paymentcard from './Components/Home/Paymentcard/Paymentcard';
import Addjobcard from './Components/Admin/Addjobcard/Addjobcard';

const Login = lazy(() => import("./Components/Login/Login"));
const Register = lazy(() => import("./Components/Register/Register"));
const Home = lazy(() => import("./Components/Home/Home"));

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
          <Route path="/register" exact element={<Register/>} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/company" exact element={<Companyhome/>} />
          <Route path="/jobs" exact element={<Jobhome/>} />
          <Route path="/applycard" exact element={<Applycard/>} />
          <Route path="/paymentcard" exact element={<Paymentcard/>} />
          <Route path="/addjob" exact element={<Addjobcard/>} />
        </Routes>
      </Suspense>
      </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
