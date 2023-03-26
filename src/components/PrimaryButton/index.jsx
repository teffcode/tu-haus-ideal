import styled from 'styled-components'

const Button = styled.button`
  opacity: ${({disabled}) => (disabled ? '0.5' : '1')};
`

const PrimaryButton = ({ disabled, onClick, children }) => {
  return (
    <Button
      type='button'
      className='bg-primary-600 rounded-lg h-12 text-white text-md font-medium w-full'
      disabled={disabled}
      onClick={onClick}>
      {children}
    </Button>
  )
}

export default PrimaryButton