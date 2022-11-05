import "./Result.scss"
import React from 'react'

interface ResultProps {
  percent: number
  text: string
}
 
const Result = ({percent, text}: ResultProps) => {
  const styles = {
    width: `${percent*0.9}%`
  }

  return (
    <div className="resultContainer">
      <div className="text">{text}</div>
      <div style={styles} className="bar">{`${percent}%`}</div>
    </div>
  );
}
 
export default Result;