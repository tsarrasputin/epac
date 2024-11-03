import React from 'react'
import Navibar from '../Components/Navibar'
import Hero from '../Components/Hero'
import Footeri from '../Components/Footer'
import Recruit from '../Components/Recruit'
import Msg from '../Components/Msg'
import Autoslider from '../Components/Autoslider'
import Bounce from '../Components/Bounce'
import Banner from '../Components/Banner'
import Globe from 'react-globe.gl'


function Home() {


  return (
    <div className=' bg-green-50'>
      
    <Navibar/>
    <Banner/>
    <Recruit/>
    <Hero/>
    <Bounce/>
    
    <Autoslider/>
    <Msg/>
    {/* <Globe/> */}
    <Footeri/>
    </div>
  )
}

export default Home