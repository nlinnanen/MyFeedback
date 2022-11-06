import ProgressBar from '@ramonak/react-progress-bar'
import React from 'react'
import './AnswerButton.scss'

interface Props {
  text: string
  onClick: () => void
  hasClicked: boolean
  percentage: number
}

const AnswerButton = ({ text, onClick, hasClicked, percentage }: Props) => {
  if (hasClicked) {
    return (
      <div className={'results commonstyles'}>
        {text}
        <ProgressBar labelAlignment="left " className="progressbar resultProgressBar" completed={percentage} bgColor="#1d7cdc" animateOnRender />
      </div>
    )
  }

  return (
    <button className={'answerBtn commonstyles'} onClick={onClick}>
      {text}
    </button>
  )
}

export default AnswerButton
