import { useContext } from 'react'
import { HausContext } from '../../pages/App'

const PrimaryButton = ({ onClick, children }) => {
  return (
    <button
      type='button'
      className="bg-primary-600 rounded-lg h-12 text-white text-md font-medium w-full"
      onClick={onClick}>
      {children}
    </button>
  )
}

export default PrimaryButton