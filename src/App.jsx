import React from "react";
import { useState } from 'react'
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { DashboardPage } from './pages/DashboardPage';
import { SignUpPage } from './pages/SignUpPage';
import { SignInPage } from './pages/SignInPage';
import { Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {

  const [openMenu, changesMenu] = useState(false);

  return (
    <Provider store={store}>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/Dashboard" element={<DashboardPage />} />

      </Routes>
    </Provider>
    
  )
}

export default App
