const MainRecommendation = ({ name, price, image }) => {
  return (
    <div className='main-recommendation relative flex'>
      <div className='main-recommendation main-recommendation__card flex items-center gap-2 rounded-full px-2 py-1.5 bg-brand-300'>
        <div className='relative'>
          <figure className='rounded-full overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt={name} />
          </figure>
          <img className='main-recommendation__crown absolute' src="https://img.icons8.com/fluency/48/null/fairytale.png" alt='fairytale'/>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-lg font-medium truncate m-0'>{name}</p>
          <p className='text-md font-light m-0'>${price}</p>
        </div>
      </div>
      <div className='animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-300 opacity-75'></div>
    </div>
  )
}

export default MainRecommendation