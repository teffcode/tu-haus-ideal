import { createContext, useEffect, useState } from 'react'
import YourIdealHaus from '../YourIdealHaus'
import '../../styles/index.css'

export const HausContext = createContext({})

const App = () => {
  const [view, setView] = useState('welcome')
  const [questions, setQuestions] = useState([])
  const [answers, setAnswers] = useState({})

  return (
    <HausContext.Provider value={{
      view,
      setView,
      questions,
      setQuestions,
      answers,
      setAnswers
    }}>
      <YourIdealHaus />
    </HausContext.Provider>
  )
}

export default App
