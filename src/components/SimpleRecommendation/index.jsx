import styled from 'styled-components'

const SimpleCard = styled.div`
  background: ${({image}) => (image ? `url(${image})` : `url('https://ims.imgix.net/uploads/ims/project_image/image/79668/loop-lagoon-imagen-hogueras-sep.jpg?auto=compress,enhance,format&q=90&w=753')`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;

  &:before {
    background: linear-gradient(156.19deg,#242e2c 9%,rgba(1,45,38,.2) 86.4%,rgba(1,45,38,0) 107.14%);
    content: "";
    width: 3.8rem;
    height: 4.8rem;
    position: absolute;
    border-radius: 0.5rem;
  }
`
const P = styled.p`
  display: -webkit-box;
  max-width: 2.5rem;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const SimpleRecommendation = ({ name, image }) => {
  return (
    <SimpleCard
      image={image}
      className='simple-recommendation relative rounded-lg border border-white'>
      <P className='relative text-white text-xs my-1 mx-2 z-10'>{name}</P>
    </SimpleCard>
  )
}

export default SimpleRecommendation