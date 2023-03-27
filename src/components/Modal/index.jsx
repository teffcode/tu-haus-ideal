import { useContext } from 'react'
import { HausContext } from '../../pages/App'
import PrimaryButton from '../PrimaryButton'
import styled from 'styled-components'

const Container = styled.div`
  display: ${({visible}) => visible ? 'flex' : 'none' }
`

const Listing = styled.div`
  background: ${({image}) => (image ? `url(${image})` : `url('https://ims.imgix.net/uploads/ims/project_image/image/79668/loop-lagoon-imagen-hogueras-sep.jpg?auto=compress,enhance,format&q=90&w=753')`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 25rem;
  position: relative;

  &:before {
    background: linear-gradient(156.19deg,#242e2c 9.47%,rgba(1,45,38,.4) 86.4%,rgba(1,45,38,0) 107.14%);
    content: "";
    height: 24.7rem;
    width: 100%;
    position: absolute;
    border-radius: 0.5rem;
  }
`

const Crown = styled.div`
  top: -2rem;
  left: 0;
  right: 0;
  margin: 0 auto;
`

const Modal = ({ data }) => {
  const context = useContext(HausContext)

  return (
    <Container
      visible={context.isModalVisible}
      className='modal flex justify-center items-center absolute top-0 right-0 left-0 h-full w-full z-10'>
      <Listing image={data.IMAGEN} className='flex flex-col rounded-lg w-5/6 border-2 border-white'>
        <button
          onClick={() => context.setIsModalVisible(false)}
          className='absolute right-0 top-0 m-3 border-none'>
          <img src="https://img.icons8.com/material-outlined/24/ffffff/delete-sign.png"/>
        </button>
        <Crown className='absolute flex justify-center'>
          <img src="https://img.icons8.com/fluency/48/null/fairytale.png" alt='fairytale'/>
        </Crown>
        <div className='flex-1 z-10'>
          <p className='text-center font-light text-md text-white mt-8 mb-3'>Tu Haus ideal es:</p>
          <p className='text-center text-3xl text-white'>{data.NOMBRE}</p>
          <p className='text-center font-light text-xl text-white mt-1'>Desde ${data.PRECIO}</p>
        </div>
        <div className='flex gap-2 w-full p-3'>
          <button className='modal py-2.5 text-white rounded-lg border border-white w-full'>
            Pagar
          </button>
          <button className='modal py-2.5 text-white rounded-lg border border-white w-full'>
            Contactar
          </button>
          <button className='modal py-2.5 text-white rounded-lg border border-white w-full'>
            Ver más
          </button>
        </div>
      </Listing>
    </Container>
  )
}

export default Modal