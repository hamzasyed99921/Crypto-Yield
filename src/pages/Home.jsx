import React from 'react'
import Card from '../components/Elements/Card'
import Contact from '../components/Elements/Contact'
import Crypto from '../components/Elements/Crypto'
import Deposit from '../components/Elements/Deposit'
import Hero from '../components/Elements/Hero'
import Sections from '../components/Elements/Sections'
import Simple from '../components/Elements/Simple'
import Trade from '../components/Elements/Trade'
import Vision from '../components/Elements/Vision'

const Home = () => {
  return (
    <>
      <Hero/>
      <Crypto/>
      <Card/>
      <Deposit/>
      <Trade/>
      <Sections/> 
      <Simple/>
      <Vision/>
      <Contact/>
    </>
  )
}

export default Home