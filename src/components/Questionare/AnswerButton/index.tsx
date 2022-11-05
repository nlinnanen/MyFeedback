import React from 'react';
import "./AnswerButton.scss"

interface Props {
  text: string
}

const AnswerButton = ({ text }: Props) => {
  return (
      <button className='btn'>{text}</button>
  )
}

export default AnswerButton
