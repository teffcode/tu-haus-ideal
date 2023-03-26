import { createContext, useEffect, useState } from 'react'
import YourIdealHaus from '../YourIdealHaus'
import '../../styles/index.css'

export const HausContext = createContext({})

const App = () => {
  const [view, setView] = useState('welcome')
  const [greetings, setGreetings] = useState(null)
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})
  const [goToPlayground, setGoToPlayground] = useState(false)

  return (
    <HausContext.Provider value={{
      view,
      setView,
      greetings,
      setGreetings,
      questions,
      setQuestions,
      answers,
      setAnswers,
      goToPlayground,
      setGoToPlayground
    }}>
      <YourIdealHaus />
    </HausContext.Provider>
  )
}

export default App
