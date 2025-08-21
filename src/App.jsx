import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './compoennts/banner'
import Footer from './compoennts/footer'
import PurposeSection from './compoennts/crousal'
import ImpactNumbers from './compoennts/ImpactNumber'
import FacilityCarousel from './compoennts/FacilityCarousel'
import CGTimeline from './compoennts/CGTimeline'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden'>
      <Banner />
      <PurposeSection />
      <CGTimeline />
      <ImpactNumbers />
      <FacilityCarousel />
      <Footer />
    </div>
  )
}

export default App
