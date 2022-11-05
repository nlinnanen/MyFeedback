import React from 'react'

import './App.scss'
import AnswerButton from './components/AnswerButton'

const App = () => {
  const answers = ['ensimmäinen', 'toinen', 'kolmas', 'neljäs', 'viides']

  return (
    <div className="grid">
      {answers.map((a, i) => (
        <AnswerButton key={i} text={a} />
        ))}
    </div>
  )
}

export default App
