import React, { useState } from 'react'
import AnswerButton from './AnswerButton'
import './Questionare.scss'
import { usePoll } from '../../hooks/usePoll'
import { POLL_ID } from '../../utils/constants'
import { vote } from '../../utils/db'

const Questionare = () => {
  const [hasAnswered, setHasAnswered] = useState<boolean>(false)
  const [data, loading] = usePoll(POLL_ID)

  if (loading || !data) {
    return null
  }
  const { question, options } = data ?? {}

  const totalVotes = options.reduce((reducer: number, [, votes]) => reducer + votes, 0)

  return (
    <div className="questionareGrid">
      <h1 className="header">{question}</h1>
      <div className="answers">
        {' '}
        {options.map(([name, votes], index) => {
          return (
            <AnswerButton
              key={name}
              text={name}
              percentage={Math.round((votes * 100) / totalVotes)}
              onClick={() => {
                setHasAnswered(true)
                vote(data, index)
              }}
              hasClicked={hasAnswered}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Questionare
