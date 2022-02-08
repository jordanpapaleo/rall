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
    <div>
      <div>
        <a href="https://forms.gle/3sZFMh6tB6JFAfcQ8" title="open google doc">Submit a background check form</a>
      </div>

      <h1>Spring 2022 Background Checked Manager/Coach</h1>
      <h2>UPDATED: {dateString}</h2>

      <div style={{ columns: '100px 4' }}>
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
