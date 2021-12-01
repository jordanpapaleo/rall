import React from  'react'
import { ROLES, STAFF } from '../data/boardMembers'
import Contact from '../Contact'
import { colorHash, colors, fonts } from '../styles'
import orderBy from 'lodash/orderBy'

const Staff = () =>  {
  const eboard = orderBy(STAFF, ['role', 'lastName'], ['asc'])
    .filter(({active}) => active)
    .filter(({ role }) => role)


  const regboard = orderBy(STAFF, ['lastName'], ['asc'])
    .filter(({ active }) => active)
    .filter(({ role }) => !role)
    .map(({ firstName, lastName }) => firstName + ' ' + lastName)
    .join(', ')

  return (
    <div className="staff">
      <style>{`
        .staff li:hover {
          background-color: ${colorHash.grey200};
        }

        .staff .eboard {
          color: ${colors.defaultText};
          display: grid;
          font-size: ${fonts.textLg};
          grid-template-columns: 150px 150px 1fr;
          padding: 1rem 0;
        }

        .staff .boardmembers {
          color: ${colors.defaultText};
          font-size: ${fonts.textBase};
          line-height: 1.5;
        }
      `}</style>
      <h2>2022 Executive Board Members</h2>
      <ul style={{listStyleType: 'none', margin: 0, padding: 0, }}>
        {eboard.map(({firstName, lastName, role, email}) => (
          <li style={{marginBottom: '0.5rem'}}>
            <h3 className="eboard">
              <strong>{firstName} {lastName}</strong>
              {ROLES[role]}
              {email
                ? <a href={`mailto:${email}`}>{email}</a>
                : email
              }
            </h3>
          </li>
        ))}
      </ul>

      <hr style={{margin: '1rem 0'}}/>

      <h2>2022 Board Members</h2>
      <div className="boardmembers">
        {regboard}
      </div>

      <hr style={{ margin: '1rem 0' }} />

      <Contact style={{marginTop: '1rem'}} />
    </div>
  )
}

Staff.displayName = 'staff'

export default Staff
