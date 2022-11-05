import React, { useState } from "react"
import AnswerButton from "./AnswerButton"
import "./Questionare.scss"

const ANSWERS = ['toinen', 'kolmas', 'neljäs', 'viides']
const Questionare = () => {
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  return (
    <div className="grid">
      {!hasAnswered && ANSWERS.map((a, i) => (
        <AnswerButton key={i} text={a} onClick={() => setHasAnswered(true)}/>
      ))}
    </div>
  )
}

export default Questionare
