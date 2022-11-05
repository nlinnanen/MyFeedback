import React, { useState } from 'react'
import AnswerButton from './AnswerButton'
import './Questionare.scss'
import Result from './Result'

const ANSWERS = ['ensimmäinen', 'toinen', 'kolmas', 'neljäs', 'viides']
const RESULTS = [10, 20, 30, 40, 100]
const Questionare = () => {
  const [hasAnswered, setHasAnswered] = useState<boolean>(false)
  return (
    <div className="grid">
      <div className={`answers ${!hasAnswered ? '' : 'invisible'}`}>
        {' '}
        {ANSWERS.map((a, i) => (
          <AnswerButton key={i} text={a} onClick={() => setHasAnswered(true)} />
        ))}
      </div>
      <div className={`results ${hasAnswered ? '' : 'invisible'}`}>
        {ANSWERS.map((a, i) => (
          <Result key={i} percent={RESULTS[i]} text={a}/>
        ))}
      </div>
    </div>
  )
}

export default Questionare
