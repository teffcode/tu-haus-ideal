import styled from 'styled-components'

const SimpleCard = styled.div`
  background: ${({image}) => (image ? `url(${image})` : `url('https://ims.imgix.net/uploads/ims/project_image/image/79668/loop-lagoon-imagen-hogueras-sep.jpg?auto=compress,enhance,format&q=90&w=753')`)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`

const SimpleRecommendation = ({ name, price, image }) => {
  return (
    <SimpleCard
      image={image}
      className='simple-recommendation rounded-lg border border-white'>
      <p className='text-white text-xs my-1 mx-2 truncate'>{name}</p>
      <p className='text-white text-sm'>{price}</p>
    </SimpleCard>
  )
}

export default SimpleRecommendation