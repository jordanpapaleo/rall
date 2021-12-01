import React from 'react'

const styleDD = {
  display: 'grid',
  gridTemplateColumns: '150px 1fr',
  fontSize: '1rem'
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

const Contact = ({style = {}}) => (
  <dl style={style}>
    <div style={styleDD}>
      <dd style={{fontWeight: 'bold'}}>Voicemail:</dd>
      <dt><a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a></dt>
    </div>
    <div style={styleDD}>
      <dd style={{ fontWeight: 'bold' }}>General Contact:</dd>
      <dt><a href={`mailto${contactInfo.generalEmail}`}>{contactInfo.generalEmail}</a></dt>
    </div>
    <div style={styleDD}>
      <dd style={{fontWeight: 'bold'}}>Safety:</dd>
      <dt><a href={`mailto${contactInfo.safety}`}>{contactInfo.safety}</a></dt>
    </div>
    <div style={styleDD}>
      <dd style={{fontWeight: 'bold'}}>Registration:</dd>
      <dt><a href={`mailto${contactInfo.registration}`}>{contactInfo.registration}</a></dt>
    </div>
    <div style={styleDD}>
      <dd style={{fontWeight: 'bold'}}>Background Checks:</dd>
      <dt><a href={`mailto${contactInfo.backgroundChecks}`}>{contactInfo.backgroundChecks}</a></dt>
    </div>
  </dl>
)

export default Contact
