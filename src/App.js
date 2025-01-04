import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Aboutme from './components/Aboutme/Aboutme'
import Service from './components/Services/Service'
import Mywork from './components/Mywork/Mywork'
import Contact from './components/Contact/Contact'

export default function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Aboutme/>
      <Service/>
      <Mywork/>
      <Contact/>
    </div>
  )
}
