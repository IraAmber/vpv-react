import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AdvantagesBlock from './components/AdvantagesBlock'
import ServicesBlock from './components/ServicesBlock'
import LeadMagnet from './components/LeadMagnet'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Faq from './components/Faq'
import SocialMediaLinks from './components/SocialMediaLinks'
import Feedbacks from './components/Feedbacks'
// import DiscountRoulette from './components/DiscountRoulette'

const App = () => (
  <div
    id="page-top"
    className="index"
    data-pinterest-extension-installed="cr1.3.4"
  >
    <Navbar />
    <HeroSection />
    <AdvantagesBlock />
    <ServicesBlock />
    <LeadMagnet />
    <Contact />
    <Portfolio />
    <Faq />
    <Feedbacks />
    {/* <DiscountRoulette /> */}
    <SocialMediaLinks />
  </div>
)

export default App
