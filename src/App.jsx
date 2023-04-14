import React, { useState } from 'react'



function App() {


  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isQuizStarted, setIsQuizStarted] = useState(false)

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
  }

  function startQuiz() {
    setIsQuizStarted(!isQuizStarted)
  }

 
  if (isQuizStarted) {
    // Render the quiz screen
    return (
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <button className = "toggle-button" onClick={toggleDarkMode}></button>
        <h1>Quiz Screen</h1>
        <button onClick={startQuiz}>Return</button>
      </div>
    );
  }



  return (
    
    <div className = {isDarkMode ? "dark-mode" : "light-mode"}>
      <button className = "toggle-button" onClick={toggleDarkMode}></button>
        <div className = {`landing-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
          <div className = {`landing-text ${isDarkMode ? "dark-mode" : "light-mode"}`}>
              <h1>Quizzical</h1>
              <h6>Give your brain a workout</h6>
              <button className = "start-button" onClick={startQuiz}>Start Quiz</button>
          </div>
        </div>
    </div>
     
    

  )
}

export default App
