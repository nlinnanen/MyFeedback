import React from "react"
import AnswerButton from "./AnswerButton"
import "./Questionare.scss"

const ANSWERS = ['toinen', 'kolmas', 'neljäs', 'viides']
const Questionare = () => {
  
  return (
    <div className="grid">
      {ANSWERS.map((a, i) => (
        <AnswerButton key={i} text={a} />
      ))}
    </div>
  )
}

export default Questionare
