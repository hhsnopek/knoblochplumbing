import React, { Fragment } from 'react'
import { withSiteData } from 'react-static'
import {
  About,
  Footer,
  Header,
  Hero,
  Satisfaction,
  Services,
} from '../components'

export default withSiteData(() => (
  <Fragment>
    <Header />
    <main>
      <Hero />
      <Services />
      <Satisfaction />
      <About />
    </main>
    <Footer />
  </Fragment>
))
