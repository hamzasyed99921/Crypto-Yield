import React from 'react'
import Card from '../components/Elements/Card'
import Crypto from '../components/Elements/Crypto'
import Deposit from '../components/Elements/Deposit'
import Hero from '../components/Elements/Hero'
import Trade from '../components/Elements/Trade'

const Home = () => {
  return (
    <>
      <Hero/>
      <Crypto/>
      <Card/>
      <Deposit/>
      <Trade/>
    </>
  )
}

export default Home