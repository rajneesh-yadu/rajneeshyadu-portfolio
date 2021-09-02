export default function Card(props) {
  return (
    <>
      <div className='shadow-2xl flex flex-col gap-2 lg:flex-row items-center w-5/6 xl:w-4/6 text-pink-800 text-4xl group transition duration-500 ease-in-out transform hover:scale-110 hover:bg-gradient-to-tl bg-gradient-to-r from-indigo-800 via-indigo-800 to-indigo-900'>
        <div className='flex w-26 h-26 m-2 justify-center items-center bg-gray-400 aspect-w-16 aspect-h-9'>
          <img src={props.image} width='100' height='100'></img>
        </div>
        <div className='flex flex-col lg:w-1/4 justify-center items-center lg:items-start'>
          <div className='font-bold font-mono text-center lg:text-justify '>
            {props.title}
          </div>
          <div className='text-xl font-mono text-pink-800'>{props.price}</div>
        </div>
      </div>
    </>
  )
}
