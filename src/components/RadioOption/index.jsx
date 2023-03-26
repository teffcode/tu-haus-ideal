import styled from 'styled-components'

const Label = styled.label`
  border: 0.2rem solid ${({checked}) => (checked ? '#3ECFAF' : 'transparent')};
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  -webkit-backdrop-filter: blur(0.313rem);
          backdrop-filter: blur(0.313rem);
`

const RadioOption = ({ checked, onChange, children }) => {
  return (
    <Label
      checked={checked}
      className='flex items-center justify-center rounded-lg w-full h-full p-0.5 text-center text-white text-sm font-medium'>
      <input
        type='radio'
        checked={checked}
        onChange={onChange}
        className='hidden' />
      {children}
    </Label>
  )
}

export default RadioOption