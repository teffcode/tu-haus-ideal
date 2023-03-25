import { createContext, useEffect, useState } from 'react'
import YourIdealHaus from '../YourIdealHaus'
import '../../styles/index.css'

export const HausContext = createContext({})

const App = () => {
  const [view, setView] = useState(false)

  return (
    <HausContext.Provider value={{
      view,
      setView
    }}>
      <YourIdealHaus />
    </HausContext.Provider>
  )
}

export default App
