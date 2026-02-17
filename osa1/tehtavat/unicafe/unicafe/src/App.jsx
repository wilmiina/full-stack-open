import { useState } from 'react'

const Header = () => {
  return (
    <header>
      <h1>give feedback</h1>
    </header>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const Stats = () => {
  return (
    <header>
      <h1>statistics</h1>
    </header>
  )
}

const Statistics = (props) => {
  return(
    <div>
       <header>
      <h1>statistics</h1>
      </header>
      <p>good {props.good} <br/>
      neutral {props.neutral} <br/>
      bad {props.bad} <br/>
      all {props.all} <br/>
      average {props.average} <br/>
      positive {props.positive}% </p>
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