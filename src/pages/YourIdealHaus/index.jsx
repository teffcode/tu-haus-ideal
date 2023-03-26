import { useContext, useEffect } from 'react'
import axios from 'axios'
import PrimaryButton from '../../components/PrimaryButton'
import RadioOption from '../../components/RadioOption'
import AnswerMessage from '../../components/AnswerMessage'
import Logo from '../../components/Logo'
import { typeWriterEffect, scrollToBottom } from '../../utils'
import { HausContext } from '../App'
import { GREETINGS_API, QUESTIONS_API, ANSWERS_API } from '../../apis'
import './styles.css'

const YourIdealHaus = () => {
  const context = useContext(HausContext)

  const requestQuestions = async () => {
    const questions = await axios.post(QUESTIONS_API, {
      user_type: 'EXPLORER_INVESTOR',
    })
    context.setQuestions(questions.data)
    await context.setGoToPlayground(true)
  }

  const requestAnswers = async () => {
    const answers = await axios.post(ANSWERS_API, {
      user_type: 'EXPLORER_INVESTOR',
      user_responses: context.userResponses
    })
    context.setAnswers(answers.data)
    scrollToBottom('messages')
  }

  useEffect(() => {
    if (context.view === 'welcome') {
      (async () => {
        const greetings = await axios.post(GREETINGS_API, {
          user_type: 'EXPLORER_INVESTOR'
        })
        context.setGreetings(greetings.data)
        await typeWriterEffect('text')
      })()

      requestQuestions()
    }
  }, [])

  const renderWelcome = () => {
    return (
      <div className='welcome inline-flex flex-col items-center w-full h-full p-6'>
        <div className='welcome__text flex flex-1 mb-4'>
          <p id="text" className='self-end text-white text-center'>
            {context.greetings}
          </p>
        </div>
        <PrimaryButton
          disabled={!context.goToPlayground}
          onClick={() => context.setView('playground')}>
          Comenzar
        </PrimaryButton>
      </div>
    )
  }

  const renderPlayground = () => {
    return (
      <div className='playground flex flex-col w-full h-full px-6 py-5'>
        <div className='flex justify-center my-3'>
          <Logo />
        </div>
        <section className='w-full px-4'>
          <p className='text-white text-sm font-light truncate w-full mb-1'>
            {context.questions[0]?.question}
          </p>
          <div className='grid grid-cols-2 gap-2 w-full'>
            {
              context.questions[0]?.answers?.map((answer, index) => {
                return (
                  <RadioOption
                    key={index}
                    checked={context.userResponses[0] === answer.value}
                    onChange={() => {
                      context.setUserResponses({ ...context.userResponses, 0: answer.value })
                      requestAnswers()
                    }}>
                    {answer.data}
                  </RadioOption>
                )
              })
            }
          </div>
          <p className='text-white text-sm font-light truncate w-full mt-4 mb-1'>
            {context.questions[1]?.question}
          </p>
          <div className='grid grid-cols-2 gap-2 w-full'>
            {
              context.questions[1]?.answers?.map((answer, index) => {
                return (
                  <RadioOption
                    key={index}
                    checked={context.userResponses[1] === answer.value}
                    onChange={() => {
                      context.setUserResponses({ ...context.userResponses, 1: answer.value })
                      requestAnswers()
                    }}>
                    {answer.data}
                  </RadioOption>
                )
              })
            }
          </div>
          <p className='text-white text-sm font-light truncate w-full mt-4 mb-1'>
            {context.questions[2]?.question}
          </p>
          <div className='grid grid-cols-3 gap-2 w-full'>
            {
              context.questions[2]?.answers?.map((answer, index) => {
                return (
                  <RadioOption
                    key={index}
                    checked={context.userResponses[2] === answer.value}
                    onChange={() => {
                      context.setUserResponses({ ...context.userResponses, 2: answer.value })
                      requestAnswers()
                    }}>
                    {answer.data}
                  </RadioOption>
                )
              })
            }
          </div>
          <p className='text-white text-sm font-light truncate w-full mt-4 mb-1'>
            {context.questions[3]?.question}
          </p>
          <div className='grid grid-cols-2 gap-2 w-full'>
            {
              context.questions[3]?.answers?.map((answer, index) => {
                return (
                  <RadioOption
                    key={index}
                    checked={context.userResponses[3] === answer.value}
                    onChange={() => {
                      context.setUserResponses({ ...context.userResponses, 3: answer.value })
                      requestAnswers()
                    }}>
                    {answer.data}
                  </RadioOption>
                )
              })
            }
          </div>
        </section>
        <section id='messages' className='playground__messages rounded-lg flex flex-col items-end mt-5 p-4 h-full overflow-y-scroll'>
          <AnswerMessage>{'Hola mundito'}</AnswerMessage>
          <AnswerMessage>{'Hola mundito last con un texto demasiado demasiado demasiado largo a ver qué pasa y cómo se ve en la pantalla'}</AnswerMessage>
        </section>
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
