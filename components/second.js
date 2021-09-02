import Card from '../components/card'

export default function Second() {
  const cardData = [
    {
      title: 'Moviestan',
      price: 'JavaScript ReactJs MaterialUI AXIOS TmdbAPI',
      image: '/javascript.svg',
    },
    {
      title: 'Social Media Jr',
      price:
        'JavaScript ReactJs MaterialUI AXIOS NodeJs ExpressJs MongoDb Mongoose',
      image: '/man-hair.svg',
    },
    {
      title: 'NASA APOD',
      price: 'JavaScript ReactJs MaterialUI AXIOS NasaAPI',
      image: '/beard.svg',
    },
    {
      title: 'Saloon Shop',
      price: '40',
      image: '/beard.png',
    },
    {
      title: 'Face Massage',
      price: '100',
      image: '/massage-1.png',
    },
    {
      title: 'Face Scrub+Massage',
      price: '150',
      image: '/massage.png',
    },
    {
      title: 'Face Wax',
      price: '180',
      image: '/face-mask.png',
    },
  ]

  return (
    <div id='services' className='border border-transparent  '>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center place-content-center gap-5  lg:min-h-screen my-16 lg:my-8'>
        {cardData.map((card) => (
          <Card
            title={card.title}
            price={card.price}
            image={card.image}
            key={card.title}
          />
        ))}
      </div>
    </div>
  )
}
