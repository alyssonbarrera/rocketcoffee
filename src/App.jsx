import React from "react";
import { useState } from 'react'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { DashboardPage } from './pages/DashboardPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { Routes, Route } from "react-router-dom";

function App() {

  const [openMenu, changesMenu] = useState(false);

  return (
    <Routes>

      <Route path="/" element={<Home openMenu={changesMenu} open={openMenu} />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/Dashboard" element={<DashboardPage />} />

    </Routes>
    
  )
}

export default App
