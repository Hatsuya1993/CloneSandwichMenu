import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../Components/About'
import Banner from '../Components/Banner'
import Contact from '../Components/Contact'
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
      <Contact />
    </div>
  )
}

export default Home
