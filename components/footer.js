import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <section id='about'>
      <div className='divide-y-2 divide-gray-800 divide-solid min-h-screen flex flex-col text-gray-400 gap-2 bg-pink-900 font-sans justify-around font-thin'>
        <div className='h-1/2 flex flex-col items-center'>
          <div className='text-center flex flex-col mt-12 mb-6'>
            <span className='text-2xl 3xl:text-4xl text-gray-200'>
              SURAJ SEN
            </span>
            <span className='ml-2 align-text-top text-gray-400 3xl:text-xl'>
              Barber Shop Owner
            </span>
            <span className='ml-2 align-text-top text-gray-200 3xl:text-xl'>
              +91 83190 73987
            </span>
          </div>
          <div className='flex gap-8 justify-center mb-4'>
            <a
              href='https://www.facebook.com/profile.php?id=100009381370560'
              target='_blank'
            >
              <img className='h-8 w-8' src='/fb.svg'></img>
            </a>
            <a href='https://www.instagram.com/suraj__sen___/' target='_blank'>
              <img className='h-8 w-8' src='/ig.svg'></img>
            </a>
            {/* <img className='h-8 w-8' src='/whatsapp.svg'></img> */}
          </div>
          <p className='text-center lg:w-1/4 w-3/4 3xl:text-2xl'>
            bus stand, New, Dongargarh, Chhattisgarh 491445
          </p>
        </div>
        <div className='mb-8 h-1/2'>
          <div className='text-center mt-20 sm:mt-8 mb-6 flex flex-col'>
            <span className='text-2xl 3xl:text-4xl text-gray-300 animate-pulse'>
              RAJNEESH YADU
            </span>
            <span className='ml-2 align-text-top text-gray-400 3xl:text-xl'>
              Web developer
            </span>
          </div>
          <a
            href='https://www.instagram.com/webdev_rajneesh_yadu/'
            target='_blank'
          >
            <p className='text-center mb-4  text-pink-600 animate-bounce cursor-pointer font-bold 3xl:text-2xl'>
              Do u need a website for you? Contact me!
            </p>
          </a>
          <div className='flex gap-6 justify-center mb-4 animate-none'>
            <a href='https://www.facebook.com/rajneesh.yadu.7/' target='_blank'>
              <img className='h-8 w-8' src='/fb.svg'></img>
            </a>
            <a
              href='https://www.instagram.com/webdev_rajneesh_yadu/'
              target='_blank'
            >
              <img className='h-8 w-8' src='/ig.svg'></img>
            </a>
            <a
              href='https://www.linkedin.com/in/rajneesh-yadu/'
              target='_blank'
            >
              <img className='h-8 w-8' src='/linkedin.svg'></img>
            </a>
            {/* <a href='https://www.gmail.com' target='_blank'>
              <img className='h-8 w-8' src='/mail.svg'></img>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
