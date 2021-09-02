import React from 'react'
import Image from 'next/image'

export default function Third() {
  const skillArray = [
    {
      title: 'JavaScript',
      expertise: '7.5',
      icon: '/javascript.svg',
    },
    {
      title: 'ReactJs',
      expertise: '7.5',
      icon: '/react.svg',
    },
    {
      title: 'NextJs',
      expertise: '7.5',
      icon: '/nextjs.svg',
    },
    {
      title: 'Redux',
      expertise: '7.5',
      icon: '/redux.svg',
    },
    {
      title: 'React Router',
      expertise: '7.5',
      icon: '/react-router.svg',
    },
    {
      title: 'MaterialUI',
      expertise: '7.5',
      icon: '/material-ui.svg',
    },
    {
      title: 'TailwindCSS',
      expertise: '7.5',
      icon: '/tailwindcss.svg',
    },
    {
      title: 'CSS-3',
      expertise: '7.5',
      icon: '/css-3.svg',
    },
    {
      title: 'HTML-5',
      expertise: '7.5',
      icon: '/html-5.svg',
    },
    {
      title: 'NodeJs',
      expertise: '7.5',
      icon: '/nodejs.svg',
    },
    {
      title: 'Express',
      expertise: '7.5',
      icon: '/express.svg',
    },
    {
      title: 'MongoDB',
      expertise: '7.5',
      icon: '/mongodb.svg',
    },
    {
      title: 'Git',
      expertise: '7.5',
      icon: '/git.svg',
    },
    {
      title: 'Jest',
      expertise: '7.5',
      icon: '/jest.svg',
    },
    {
      title: 'Postman',
      expertise: '7.5',
      icon: '/postman.svg',
    },
    {
      title: 'Jira',
      expertise: '7.5',
      icon: '/jira.svg',
    },
  ]
  return (
    <>
      <section id='timings'>
        <div className='flex flex-col sm:flex-row justify-center min-h-screen rounded-tl-full bg-gradient-to-bl from-indigo-700 via-indigo-800 to-indigo-900'>
          <div className='w-full text-2xl md:text-6xl flex items-center justify-center text-indigo-500 font-extrabold text'>
            Tech and Tools
          </div>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-center gap-4 lg:gap-10 p-8  text-gray-200 w-full'>
            {skillArray.map((skill) => (
              <div
                className='flex flex-col bg-pink-800 rounded-md p-1 items-center shadow-sm w-full'
                key={skill.title}
              >
                <Image src={skill.icon} width='40' height='40' />
                <div className=''>{skill.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
