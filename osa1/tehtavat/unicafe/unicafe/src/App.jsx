import { useState } from 'react'

const Header = () => {
  return (
    <header>
      <h1>give feedback</h1>
    </header>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <div>
        <h1>statistics </h1>
        <p>No feedback given. </p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <StatisticsLine text="good" value={props.good} />
      <StatisticsLine text="neutral" value={props.neutral} />
      <StatisticsLine text="bad" value={props.bad} />
      <StatisticsLine text="all" value={props.all} />
      <StatisticsLine text="average" value={props.average} />
      <StatisticsLine text="positive" value={props.positive} />
    </div>
    )
  }

  const StatisticsLine = (props) => {
    return (
      <div>
        {props.text} {props.value}
      </div>
    )
  }



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [total, setTotal] = useState(0)
  const average = total / all
  const positive = (good / all) * 100

  const handleGoodCLick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
    setTotal(total + 1)
  }
  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(good + neutral + updatedBad)
    setTotal(total - 1)
  }

  return (
    <div>
      <Header />
      <Button onClick={handleGoodCLick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App