import { useState, useContext, useEffect } from 'react'
import PrimaryButton from '../../components/primaryButton'
import Logo from '../../components/Logo'
import { typeWriterEffect } from '../../utils'
import { HausContext } from '../App'
import './styles.css'

const YourIdealHaus = () => {
  const context = useContext(HausContext)

  useEffect(() => {
    if (context.view === 'welcome') {
      typeWriterEffect('text')
    }
  })

  const renderWelcome = () => {
    return (
      <div className='welcome inline-flex flex-col items-center w-full h-full p-6'>
        <div className='welcome__text flex flex-1 mb-4'>
          <p id="text" className='self-end text-white text-center'>
            ¡Bienvenido! Aquí te ayudaremos a encontrar tu propiedad ideal. Responde algunas preguntas y te guiaremos. ¡Eres un inversionista, perfecto!
          </p>
        </div>
        <PrimaryButton onClick={() => context.setView('playground')}>
          Comenzar
        </PrimaryButton>
      </div>
    )
  }

  const renderPlayground = () => {
    return (
      <div className='playground inline-flex flex-col items-center w-full h-full p-6'>
        <Logo />
      </div>
    )
  }

  const renderView = () => context.view === 'playground' ? renderPlayground() : renderWelcome()

  return (
    <>
      {renderView()}
    </>
  )
}

export default YourIdealHaus
