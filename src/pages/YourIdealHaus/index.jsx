import { useState, useContext } from 'react'
import PrimaryButton from '../../components/primaryButton'
import Logo from '../../components/Logo'
import { HausContext } from '../App'
import './styles.css'

const YourIdealHaus = () => {
  const context = useContext(HausContext)

  const renderWelcome = () => {
    return (
      <div className='welcome inline-flex flex-col items-center w-full h-full p-6'>
        <div className='flex flex-1'>
          <p className='self-end text-center text-white mb-4'>
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
      <div className='flex flex-col items-center mt-12'>
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
