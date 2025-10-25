import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const lib="react"
  const number=1
  const name="project"

  return (
    <div className="main">
      <div className="child1">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Help</li>
        </ul>
      </div>
      <div className="child2">
          <h1>React App</h1>
          <p>This is my {number} st {lib} {name}</p><br />
          <p>In this i have created a nav bar with some content...</p>
      </div>
    </div>
  )
}

export default App
