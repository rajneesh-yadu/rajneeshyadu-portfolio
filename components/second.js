import Card from '../components/card'

export default function Second() {
  const cardData = [
    {
      title: 'Moviestan',
      price: ['JavaScript', 'ReactJs', 'MaterialUI', 'AXIOS', 'TmdbAPI'],
      image: '/moviestan.jpg',
      url: 'https://ry-moviestan.web.app/popular',
    },
    {
      title: 'Astronomy Photo Of The Day - NASA',
      price: ['JavaScript', 'ReactJs', 'Material UI'],
      image: '/apod.jpg',
      url: 'https://ry-npod.web.app/',
    },
    {
      title: 'Saloon Shop',
      price: ['JavaScript', 'ReactJs', 'NEXT JS', 'Tailwind CSS'],
      image: '/saloon.jpg',
      url: 'https://surajsaloon.vercel.app/',
    },
  ]

  return (
    <section id='projects' className='border border-transparent'>
      <div className='text-center text-secondary1-light text-3xl font-extrabold'>
        Projects
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center place-content-center gap-5  lg:min-h-screen my-16 lg:my-8'>
        {cardData.map((card) => (
          <Card
            title={card.title}
            price={card.price}
            image={card.image}
            url={card.url}
            key={card.title}
          />
        ))}
      </div>
    </section>
  )
}
