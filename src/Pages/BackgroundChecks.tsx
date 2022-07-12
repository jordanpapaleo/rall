import React from 'react'
import Contact, { AddressBlock } from "../components/Contact"
import { spacing } from '../styles'
import approvedVolunteers from '../data/backgroundChecks'

const BackgroundChecks = () => {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear()
  const dateString = `${month}/${day}/${year}`

  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      <h1>Spring 2022 Background Checked Manager/Coach</h1>
      <h2>UPDATED: {dateString}</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(275px, 1fr))',
      }}>
        {/* <div style={{ columns: '100px 4' }}> */}
        {approvedVolunteers.map((volunteer) => (
          <div key={volunteer}>
            {volunteer}
          </div>
        ))}
      </div>
    </div>
  )
}

BackgroundChecks.displayName = 'BackgroundChecks'

export default BackgroundChecks
