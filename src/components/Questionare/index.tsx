import React from "react"
import AnswerButton from "./AnswerButton"
import "./Questionare.scss"

const Questionare = () => {
  const answers = ['toinen', 'kolmas', 'neljäs', 'viides']

  return (
    <div className="grid">
      {answers.map((a, i) => (
        <AnswerButton key={i} text={a} />
      ))}
    </div>
  )
}

export default Questionare
