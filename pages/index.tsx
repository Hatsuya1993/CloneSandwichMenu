import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../Components/About'
import Banner from '../Components/Banner'
import Menu from '../Components/Menu'
import { Navbar } from '../Components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Catering App V2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <About />
      <Menu />
    </div>
  )
}

export default Home
