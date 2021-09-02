export default function First() {
  return (
    <section id='home'>
      <div className='flex flex-col justify-center xl:justify-center items-center h-screen rounded-br-full bg-gradient-to-tl from-indigo-700 via-indigo-800 to-indigo-900'>
        <div>
          <div className='text-gray-400 text-3xl font-bold ml-6  xl:text-6xl bg-clip-text text-transparent bg-gradient-to-b  from-pink-800 via-pink-800 to-pink-800'>
            Hi, I am <span className='underline'>Rajneesh</span>
            {/* <span className='text-gray-500'>from </span>
            <span className='bg-clip-text text-transparent bg-gradient-to-t from-green-500 via-white to-red-500'>
              India
            </span> */}
          </div>
          <div className='text-gray-400 font-bold ml-6 xl:text-3xl bg-clip-text text-transparent bg-gradient-to-t from-indigo-300 via-indigo-300 to-indigo-300'>
            A Passionate Web developer
          </div>
        </div>
        {/* <img src='/triangle1.svg' className='bg-triangle1 h-3/4 w-screen'></img> */}
      </div>
    </section>
  )
}
