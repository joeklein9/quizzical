import React, { useState } from 'react'
import Quiz from "./Quizz"



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
       <button
        className={`toggle-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
        onClick={toggleDarkMode}
      ></button>
        <Quiz/>
        <button onClick={startQuiz}>Return</button>
      </div>
    );
  }



  return (
    <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
      <button
        className={`toggle-button ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
        onClick={toggleDarkMode}
      ></button>
      <div className={`landing-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
        <div className={`landing-text ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <h1>Quizzical</h1>
          <h6>Give your brain a workout</h6>
          <button className="start-button" onClick={startQuiz}>
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
