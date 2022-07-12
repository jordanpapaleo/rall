import React from 'react'

import { colorHash, colors, fonts, spacing } from '../styles'
import { ROLES, STAFF } from '../data/boardMembers'
import Contact from '../components/Contact'
import orderBy from 'lodash/orderBy'

const Staff = () => {
  const eboard = orderBy(STAFF, ['role', 'lastName'], ['asc'])
    .filter(({ active }) => active)
    .filter(({ role }) => role)


  const regboard = orderBy(STAFF, ['lastName'], ['asc'])
    .filter(({ active }) => active)
    .filter(({ role }) => !role)
    .map(({ firstName, lastName }) => firstName + ' ' + lastName)
    .join(', ')

  return (
    <div className="staff" style={{ marginLeft: '10%', marginRight: '10%' }}>
      <style>{`
        .staff li {
          list-style-type: none;
          padding-left: 1rem;
        }

        .staff li:hover {
          background-color: ${colorHash.grey200};
        }

        .staff .eboard {
          color: ${colors.defaultText};
          display: grid;
          font-size: ${fonts.textLg};
          grid-template-columns: 175px 175px 1fr;
          padding: ${spacing.w4} 0;
          text-align: left;
        }

        .staff .boardmembers {
          color: ${colors.defaultText};
          font-size: ${fonts.textBase};
          line-height: 1.5;
        }

        .staff .role,
        .staff .name {
          text-align: left;
        }

        .staff .email {
          text-align: right;
        }
      `}</style>
      <h2>2022 Executive Board Members</h2>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, }}>
        {eboard.map(({ firstName, lastName, role, email }) => (
          <li style={{ marginBottom: spacing.w2 }}>
            <h3 className="eboard">
              <strong className="name">{firstName} {lastName}</strong>
              <div className="role">{ROLES[role]}</div>
              <div className="email">
                {email
                  ? <a href={`mailto:${email}`}>{email}</a>
                  : email
                }
              </div>
            </h3>
          </li>
        ))}
      </ul>

      <hr style={{ margin: `${spacing.w4} 0` }} />

      <h2>2022 Board Members</h2>
      <div className="boardmembers">
        {regboard}
      </div>

      <hr style={{ margin: `${spacing.w4} 0` }} />

      <Contact style={{ marginTop: spacing.w4 }} />
    </div>
  )
}

Staff.displayName = 'staff'

export default Staff
