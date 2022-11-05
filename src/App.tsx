import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Questionare from './components/Questionare'
import Teacher from './components/Teacher'

const App = () => {
  return (
      <Routes>
        <Route path="/admin" element={<div className="container">Admin</div>} />
        <Route
          path="/"
          element={
            <div className="container">
              <Questionare />
            </div>
          }
        />
        <Route
          path="/teacher"
          element={
            <div className="container">
              <Teacher />
            </div>
          }
        />
      </Routes>
  )
}

export default App
