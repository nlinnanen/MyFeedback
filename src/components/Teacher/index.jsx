import React, { useState } from 'react'
import './Teacher.scss'
import ProgressBarCircle from 'react-customizable-progressbar'
import ProgressBar from "@ramonak/react-progress-bar"
import Trend from 'react-trend'



const Questionare = () => {
  return (
    <div className="grid">
      <div className="left-col">
        <span className="course-code">CS-6969</span>
        <ProgressBarCircle
          radius={100}
          progress={66}
          cut={100}
          rotate={140}
          strokeColor="#1d7cdc"
        />
        <p className="score-description">Wellbeing score</p>

        <span className="score">99</span>
        <p className="score-description">Responses</p>
      </div>
      <div className="chart-area">
        <div className="current-responses">
          <h1 className="course-title">Human-Computer Interaction</h1>
          <ProgressBar completed={60} />
          <p className="score-description">Kyssäri 1</p>

          <ProgressBar completed={25} />
          <p className="score-description">Kyssäri 2</p>

          <ProgressBar completed={15} />
          <p className="score-description">Kyssäri 3</p>
        </div>

        <div className="response-trend">
          <Trend
            smooth
            autoDraw
            autoDrawDuration={3000}
            autoDrawEasing="ease-out"
            data={[0,2,5,9,5,10,3,5,0,0,1,8,2,9,0]}
            gradient={['#f72047', '#ffd200', '#21ba24']}
            radius={10}
            strokeWidth={2}
            strokeLinecap={'butt'}
          />
          <p className="score-description">Recent responses</p>
        </div>
      </div>
    </div>
  )
}

export default Questionare
