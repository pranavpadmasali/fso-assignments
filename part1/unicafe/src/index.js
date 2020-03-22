import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick,name}) => <button onClick={handleClick}>{name}</button>
const Statistic = ({name,value}) => <tr><td>{name}</td><td> {value}</td></tr>


// a proper place to define a component
const Statistics = ({good,neutral,bad}) => {
  let totalReviews = good + neutral + bad
  let averageScore = (good * 1 + neutral * 0 + bad * -1) / totalReviews
  let positivePercent = good / totalReviews
  //Conditional rendering
  if (totalReviews === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <Statistic name='good' value={good} />
        <Statistic name='neutral' value={neutral} />
        <Statistic name='bad' value={bad} />
        <Statistic name='total number of collected feedback' value={totalReviews} />
        <Statistic name='averageScore' value={averageScore} />
        <Statistic name='positivePercent' value={positivePercent} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = newValue => setGood(good + 1)
  const setBadValue = newValue => setBad(bad + 1)
  const setNeutralValue = newValue => setNeutral(neutral + 1)



  return (
    <div>
      <h1>give feedback</h1>
      <Button name='good' handleClick={setGoodValue} />
      <Button name='neutral' handleClick={setNeutralValue} />
      <Button name='bad' handleClick={setBadValue} />

      <Statistics good={good} bad={bad} neutral={neutral} />

    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)