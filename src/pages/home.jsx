import React from 'react'
import Hero from './hero'
import Identity from './identity'
import AboutUs from './about-us'
import Industries from './industries'
import Products from './products'
import ManufacturingProcess from './manufacturing-process'
import QualityCertifications from './quality-certifications'
import OurTeam from './ourteam'
import Projects from './projects'
import Sustainability from './Sustainability'
import Resources from './Resources'
import Awards from './Awards'
import Contact from './Contact'

export default function Home() {
  return (
    <section>
      <Hero />
      <Identity />
      <AboutUs />
      <Industries />
      <Products />
      <ManufacturingProcess />
      <QualityCertifications />
      <OurTeam />
      <Projects />
      <Sustainability />
      <Resources />
      <Awards />
      <Contact />
    </section>
  )
}
