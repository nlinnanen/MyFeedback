import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Questionare from './components/Questionare'

const App = () => {
  return (
    <div className="top">
      <Routes>
        <Route path="/admin" element={<div className="container">Admin</div>} />
        <Route
          path="/"
          element={
            <div className="container">
              <Questionare />
              <input />
            </div>
          }
        />
      </Routes>
    </div>
  )
}

export default App
