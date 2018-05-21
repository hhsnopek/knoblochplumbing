import React from 'react'

import family from '../../images/knobloch-family.jpg'
import './index.sss'

const About = () => (
  <section id="about">
    <div className="wrap">
      <img src={family} alt="Knobloch Family" />
    </div>
    <div id="wrap">
      <h2>Who We Are</h2>
      <p>
        We are a local, small family owned buisness that takes pride in quality
        work. We are a close family of six, with four children, one in the navy,
        one helping with the family buiness, and the other two in school playing
        various sports. Along with keeping up with our kids. We enjoy working in
        the community with our neighbors to provide a service above standards.
        We understand how families are, which helps us do efficient, quality
        work at a fair price.
      </p>
    </div>
  </section>
)

export default About
