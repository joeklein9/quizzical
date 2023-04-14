import React, { useState } from 'react'
import { DarkModeToggle } from '@anatoliygatt/dark-mode-toggle';

function Toggle(props) {
  const [mode, setMode] = useState('dark');
  return (
    <DarkModeToggle
      mode={mode}
      dark="Dark"
      light="Light"
      size="md"
      inactiveTrackColor="#e2e8f0"
      inactiveTrackColorOnHover="#f8fafc"
      inactiveTrackColorOnActive="#cbd5e1"
      activeTrackColor="#334155"
      activeTrackColorOnHover="#1e293b"
      activeTrackColorOnActive="#0f172a"
      inactiveThumbColor="#1e293b"
      activeThumbColor="#e2e8f0"
      onChange={(mode) => {
        setMode(mode);
      }} 
      onClick = {props.onClick}
      
    />
  );
}


function App() {


  const [isDarkMode, setIsDarkMode] = useState(false)

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

 




  return (
    
    <div className = {isDarkMode ? "dark-mode" : "light-mode"}>
      <Toggle onClick = {toggleDarkMode} mode/>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <div className = {`landing-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          <div className = {`landing-text ${isDarkMode ? "dark-mode" : "light-mode"}`}>
              <h1>Quizzical</h1>
              <h6>Give your brain a workout</h6>
              <button className = "start-button" onClick={console.log("change screen")}>Start Quiz</button>
          </div>
        </div>
    </div>
     
    

  )
}

export default App
