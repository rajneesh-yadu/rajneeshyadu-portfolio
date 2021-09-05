import Card from '../components/card'

export default function Second() {
  const cardData = [
    {
      title: 'Moviestan',
      price: ['JavaScript', 'ReactJs', 'MaterialUI', 'AXIOS', 'TmdbAPI'],
      image: '/moviestan.jpg',
    },
    {
      title: 'Social Media Jr',
      price: ['JavaScript', 'ReactJs', 'MaterialUI', 'AXIOS', 'TmdbAPI'],
      image: '/apod.jpg',
    },
    {
      title: 'NASA APOD',
      price: ['JavaScript', 'ReactJs', 'MaterialUI', 'AXIOS', 'TmdbAPI'],
      image: '/saloon.jpg',
    },
  ]

  return (
    <section id='projects' className='border border-transparent  '>
      <div className='text-center text-secondary1-light text-3xl font-extrabold'>
        Projects
      </div>
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
    </section>
  )
}
