import React from 'react';
import "./AnswerButton.scss"

interface Props {
  text: string
  onClick: () => void
}

const AnswerButton = ({ text, onClick }: Props) => {
  return (
      <button className='btn' onClick={onClick}>{text}</button>
  )
}

export default AnswerButton
