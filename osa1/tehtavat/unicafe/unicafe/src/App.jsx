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

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodCLick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button onClick={handleGoodCLick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Stats />
      <p>good {good} </p>
      <p>neutral {neutral} </p>
      <p>bad {bad} </p>
    </div>
  )
}

export default App