import React from 'react'
import './Teacher.scss'
import ProgressBarCircle from 'react-customizable-progressbar'
import ProgressBar from '@ramonak/react-progress-bar'
import Trend from 'react-trend'
import { usePoll } from '../../hooks/usePoll'
import { POLL_ID } from '../../utils/constants'

const Questionare = () => {
  const [data, loading, error] = usePoll(POLL_ID)

  const refinedData = React.useMemo(() => {
    if (loading) {
      return {
        score: 0,
        responses: [],
      }
    } else {
      return {
        score: 0,
        responses: [],
      }
    }
  }, [data, loading])

  if (loading || !data) {
    return null
  }

  const { question, options } = data ?? {}

  const totalVotes = options.reduce((reducer, [, votes]) => reducer + votes, 0)

  return (
    <div className="grid">
      <h1 className="course-title">Human-Computer Interaction</h1>
      <div className="left-col">
        <span className="course-code">CS-1234</span>
        <div>
          <ProgressBarCircle
            radius={100}
            progress={66}
            cut={100}
            rotate={140}
            padding={0}
            initialAnimation={true}
            transition="1.5s ease 0.5s"
            trackTransition="0s ease"
            strokeColor="#1d7cdc"
            className="progressCircle"
          >
            <div className="indicator score">
              <div>66</div>
            </div>
          </ProgressBarCircle>
          <p className="score-description circle-desc">Wellbeing score</p>
        </div>

        <div className="responses-holder">
          <span className="score">{totalVotes}</span>
          <p className="score-description">Responses</p>
        </div>
      </div>
      <div className="chart-area">
        <div className="current-responses">
          <h2 className="subheader">{question}</h2>
          {Object.entries(options).map(asdfasfasdf => {
            //console.log("name, votes:", name, votes)
            const [name, votes] = asdfasfasdf
            return (
              <div key={name} className="progress-holder">
                <ProgressBar
                  key={name}
                  animateOnRender
                  completed={(votes * 100) / totalVotes}
                  bgColor="#1d7cdc"
                />
                <p className="score-description">{name}</p>
              </div>
            )
          })}
        </div>
        <div>
          <div className="trend-line-axis"></div>
          <Trend
            smooth
            autoDraw
            autoDrawDuration={3000}
            width={600}
            height={100}
            autoDrawEasing="ease-out"
            data={[1, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]}
            gradient={['#1d7cdc']}
            radius={10}
            strokeWidth={4}
            strokeLinecap={'butt'}
            className="trend-line"
          />
          <div className="trend-line-x-axis"></div>
          <p className="trend-description">Recent responses</p>
        </div>
      </div>
    </div>
  )
}

export default Questionare
