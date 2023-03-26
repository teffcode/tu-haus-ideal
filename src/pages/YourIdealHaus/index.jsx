import { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import PrimaryButton from '../../components/PrimaryButton'
import RadioOption from '../../components/RadioOption'
import Logo from '../../components/Logo'
import { typeWriterEffect } from '../../utils'
import { HausContext } from '../App'
import { QUESTIONS_API, REQUEST_OPTIONS } from '../../apis'
import './styles.css'

const YourIdealHaus = () => {
  const context = useContext(HausContext)

  useEffect(() => {
    if (context.view === 'welcome') {
      typeWriterEffect('text')
    }

    (async () => {
      const response = await axios.post(QUESTIONS_API, {
        user_type: 'EXPLORER_INVESTOR',
        user_responses: {}
      })
      // const questions = await response.json()
      // console.log('questions: ', questions)
    })()
  }, [])

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
        <div className='flex gap-2 w-full'>
          <RadioOption
            checked={context.answers[0] === 0}
            onChange={() => context.setAnswers({ ...context.answers, 0: 0 })}>
            {'hola'}
          </RadioOption>
          <RadioOption
            checked={context.answers[0] === 1}
            onChange={() => context.setAnswers({ ...context.answers, 0: 1 })} />
        </div>
        <div className='flex w-full'>
          <RadioOption
            checked={context.answers[1] === 0}
            onChange={() => context.setAnswers({ ...context.answers, 1: 0 })} />
          <RadioOption
            checked={context.answers[1] === 1}
            onChange={() => context.setAnswers({ ...context.answers, 1: 1 })} />
        </div>
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
