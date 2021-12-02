import React from 'react'
import {spacing } from '../styles'

const styleDD = {
  display: 'grid',
  gridTemplateColumns: '150px 1fr',
  fontSize: spacing.w4
}

export const address = {
  street: `PO Box 33156`,
  city: 'Reno',
  state: 'NV',
  zipcode: '89533'
}

export const contactInfo = {
  phone: '775-453-0416',
  generalEmail: 'info@renoamerican.com',
  safety: 'safety@renoamerican.com',
  registration: 'registration@renoamerican.com',
  backgroundChecks: 'background@renoamerican.com'
}

export const AddressBlock = ({style = {}}) => {
  return (
    <address style={style}>
      {address.street}<br />
      {address.city}, {address.state} {address.zipcode}
    </address>
  )
}

const Contact = ({style = {}}) => (
  <dl style={style}>
    <div style={styleDD}>
      <dd style={{fontWeight: 'bold'}}>Phone:</dd>
      <dt><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></dt>
    </div>
    <div style={styleDD}>
      <dd style={{ fontWeight: 'bold' }}>General Contact:</dd>
      <dt><a href={`mailto:${contactInfo.generalEmail}`}>{contactInfo.generalEmail}</a></dt>
    </div>
    <div style={styleDD}>
      <dd style={{fontWeight: 'bold'}}>Safety:</dd>
      <dt><a href={`mailto:${contactInfo.safety}`}>{contactInfo.safety}</a></dt>
    </div>
    <div style={styleDD}>
      <dd style={{fontWeight: 'bold'}}>Registration:</dd>
      <dt><a href={`mailto:${contactInfo.registration}`}>{contactInfo.registration}</a></dt>
    </div>
    <div style={styleDD}>
      <dd style={{fontWeight: 'bold'}}>Background Checks:</dd>
      <dt><a href={`mailto:${contactInfo.backgroundChecks}`}>{contactInfo.backgroundChecks}</a></dt>
    </div>
  </dl>
)

export default Contact
