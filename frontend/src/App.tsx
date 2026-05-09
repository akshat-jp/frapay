import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Signup} from "./pages/signup"
import {Signin} from "./pages/signin"
import { Dashboard } from './pages/dashboard'
import { Transfer } from "./pages/transfer"
import './App.css'
import { LandingPage } from "./pages/landing"


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App
