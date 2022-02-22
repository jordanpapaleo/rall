import React from 'react'
import Contact, { AddressBlock } from "../components/Contact"
import { spacing } from '../styles'

const ContactInformation = () => {
  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      <h2>Reno American Little League</h2>
      <AddressBlock style={{ marginBottom: spacing.w4 }} />
      <Contact />
    </div >
  )
}

ContactInformation.displayName = 'contactinformation'

export default ContactInformation
