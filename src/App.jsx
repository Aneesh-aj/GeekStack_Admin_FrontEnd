import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import SideBar from './component/sidebar/SideBar'
import BusinnessPannel from './component/businessPannel/BusinnessPannel'

function App() {

  return (
    <>
      <div className="flex w-full h-full">
        <SideBar />
        <BusinnessPannel />
      </div>
    </>
  )
}

export default App
