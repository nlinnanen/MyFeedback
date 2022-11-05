import React from 'react';
import "./AnswerButton.scss"

interface Props {
  text: string
  onClick: () => void
}

const AnswerButton = ({ text, onClick }: Props) => {
  return (
    <div className='answerButtonContainer'>
      <button className='answerBtn' onClick={onClick}>{text}</button>
    </div>
  )
}

export default AnswerButton
