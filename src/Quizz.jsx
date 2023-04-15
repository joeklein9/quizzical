import {React, useState, useEffect} from "react"

export default function Quizz () {

    const [questions, setQuestions] = useState ([])

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&type=multiple')
          .then(response => response.json())
          .then(data => {
            console.log(data); // log the data once
            setQuestions(data.results); // store the data in the state
            
           
          })
          .catch(error => console.log(error))
      }, []);




    return (
        <h1>dfdfgdg</h1>

    )
}



