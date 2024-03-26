import React from 'react';
import './App.css';
import LandingPage from "./pages/anon/landing/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/anon/dashboard/Dashboard";
import SignUp from "./pages/auth/signup/SignUp";
import SignIn from "./pages/auth/signin/SignIn";


function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<LandingPage/>}/>
                  <Route path="dashboard/*" element={<Dashboard/>}/>
                  <Route path="signin" element={<SignIn/>}/>
                  <Route path="signup" element={<SignUp/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
