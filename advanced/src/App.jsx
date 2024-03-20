import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

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
        </Routes>
      </Suspense>
      </BrowserRouter>
      </div>
      
    </>
  )
}

export default App
