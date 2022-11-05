import React, { useState } from 'react'
import AnswerButton from './AnswerButton'
import './Questionare.scss'
import DbTester from '../DbTester'

const ANSWERS = ['toinen', 'kolmas', 'neljäs', 'viides']
const Questionare = () => {
  const [hasAnswered, setHasAnswered] = useState<boolean>(false)
  return (
    <div className="grid">
      <DbTester/>
      {!hasAnswered && (
        <div>
          {' '}
          {ANSWERS.map((a, i) => (
            <AnswerButton key={i} text={a} onClick={() => setHasAnswered(true)} />
          ))}
        </div>
      )}
      {hasAnswered && <div>tulokset</div>}
    </div>
  )
}

export default Questionare
