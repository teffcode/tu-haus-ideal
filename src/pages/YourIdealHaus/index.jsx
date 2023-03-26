import { useContext, useEffect } from 'react'
import axios from 'axios'
import PrimaryButton from '../../components/PrimaryButton'
import RadioOption from '../../components/RadioOption'
import Logo from '../../components/Logo'
import { typeWriterEffect } from '../../utils'
import { HausContext } from '../App'
import { GREETINGS_API, QUESTIONS_API } from '../../apis'
import './styles.css'

const YourIdealHaus = () => {
  const context = useContext(HausContext)

  const requestQuestions = async () => {
    const questions = await axios.post(QUESTIONS_API, {
      user_type: 'EXPLORER_INVESTOR',
      user_responses: context.answers
    })
    context.setQuestions(questions.data)
    await context.setGoToPlayground(true)
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
      <div className='playground inline-flex flex-col items-center w-full h-full p-6'>
        <div className='mt-4 mb-6'>
          <Logo />
        </div>
        <p className='text-white text-sm font-light truncate w-full mb-1'>
          {context.questions[0]?.question}
        </p>
        <div className='grid grid-cols-4 gap-2 w-full'>
          {
            context.questions[0]?.answers?.map((answer, index) => {
              return (
                <RadioOption
                  key={index}
                  checked={context.answers[0] === index}
                  onChange={() => {
                    context.setAnswers({ ...context.answers, 0: index })
                    requestQuestions()
                  }}>
                  {answer.data}
                </RadioOption>
              )
            })
          }
        </div>
        <p className='text-white text-sm font-light truncate w-full mt-3 mb-1'>
          {context.questions[1]?.question}
        </p>
        <div className='grid grid-cols-3 gap-2 w-full'>
          {
            context.questions[1]?.answers?.map((answer, index) => {
              return (
                <RadioOption
                  key={index}
                  checked={context.answers[1] === index}
                  onChange={() => {
                    context.setAnswers({ ...context.answers, 1: index })
                    requestQuestions()
                  }}>
                  {answer.data}
                </RadioOption>
              )
            })
          }
        </div>
        <p className='text-white text-sm font-light truncate w-full mt-3 mb-1'>
          {context.questions[2]?.question}
        </p>
        <div className='grid grid-cols-4 gap-2 w-full'>
          {
            context.questions[2]?.answers?.map((answer, index) => {
              return (
                <RadioOption
                  key={index}
                  checked={context.answers[2] === index}
                  onChange={() => {
                    context.setAnswers({ ...context.answers, 2: index })
                    requestQuestions()
                  }}>
                  {answer.data}
                </RadioOption>
              )
            })
          }
        </div>
        <p className='text-white text-sm font-light truncate w-full mt-3 mb-1'>
          {context.questions[3]?.question}
        </p>
        <div className='grid grid-cols-2 gap-2 w-full'>
          {
            context.questions[3]?.answers?.map((answer, index) => {
              return (
                <RadioOption
                  key={index}
                  checked={context.answers[3] === index}
                  onChange={() => {
                    context.setAnswers({ ...context.answers, 3: index })
                    requestQuestions()
                  }}>
                  {answer.data}
                </RadioOption>
              )
            })
          }
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
