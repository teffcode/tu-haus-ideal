import { useState, useContext, useEffect } from 'react'
import PrimaryButton from '../../components/primaryButton'
import Logo from '../../components/Logo'
import { HausContext } from '../App'
import './styles.css'

const YourIdealHaus = () => {
  const context = useContext(HausContext)

  useEffect(() => {
    let i = 0
    let tag = document.getElementById('text')
    let html = document.getElementById('text').innerHTML
    let attr = tag.setAttribute('data', html)
    let txt = tag.getAttribute('data')
    let speed = 80

    const typeWriter = () => {
      if (i <= txt.length) {
        tag.innerHTML = txt.slice(0 , i + 1)
        i++
        setTimeout(typeWriter, speed)
      }
    }

    typeWriter()
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
