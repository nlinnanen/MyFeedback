import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Questionare from './components/Questionare'

const App = () => {
  return (
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
  )
}

export default App
