import Head from 'next/head'

import Header from '../components/header'
import Footer from '../components/footer'
import First from '../components/first'
import Second from '../components/second'
import Third from '../components/third'

export default function Home() {
  return (
    <>
      <div className='container'>
        <Head>
          <title>Pooja | Hair Cutting Gents Parlour</title>
          <link rel='icon' href='/logo.png' />
        </Head>
      </div>
      <div className='font-mono bg-gradient-to-tl from-pink-700 via-pink-800 to-pink-900'>
        <Header />
        <First />
        <Second />
        <Third />
        {/* <Fourth /> */}
        <Footer />
      </div>
    </>
  )
}
