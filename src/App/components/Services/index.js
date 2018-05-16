import React from 'react'
import Ionicon from 'react-ionicons'

import './index.sss'

const services = [
  {
    icon: '',
    name: 'Sewer Video Inspection',
    description:
      "Clogged or backed up piping? We can see what's the issue without digging up your yard or the street!",
  },
  {
    icon: '',
    name: 'Sewer & Water Repar',
    description:
      'Water lines acting up and need to be repaired? How about sewer damage? We can handle it for you!',
  },
  {
    icon: '',
    name: 'New Construction',
    description: 'Building a house or need help installing? We can do it!',
  },
  {
    icon: '',
    name: 'Remodeling',
    description:
      'Redoing the bathroom, kitchen sink, or just need new pipes installed? We can help out!',
  },
  {
    icon: '',
    name: 'Commercial',
    description:
      'Installation and repair at any gas station, grocery store, school or at your business!',
  },
  {
    icon: '',
    name: 'Service Calls',
    description:
      'From dripping faucets to broken sump or ejector pumps, we can fix it!',
  },
]

const Services = () => (
  <section id="services">
    <div id="services-gutter">
      <div id="header">
        <h1>Our Services</h1>
      </div>
      <div id="info">
        <h2>We got the elbow grease to help you out!</h2>
        <div id="line" />
        <p>
          A local family owned and operated company providing plumbing services
          since 2008. We get the job done swiftly with no hassle. Arriving
          quickly, using quality materials and workmanship, giving you 100%
          satisfaction that's guaranteed.
        </p>
      </div>
    </div>
    <ul id="services-list">
      {services.map(({ icon, name, description }) => (
        <li key={name}>
          <Ionicon icon={icon} />
          <p className="name">{name}</p>
          <p className="description">{description}</p>
        </li>
      ))}
    </ul>
  </section>
)

export default Services
