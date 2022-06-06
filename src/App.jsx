import React from "react";
import { useState } from 'react'
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";

function App() {

  const [openMenu, changesMenu] = useState(false);

  return (
    <>
      <Navbar openMenu={changesMenu} open={openMenu}/>
      <Content />
    </>
  )
}

export default App
