import React from 'react'
import { spacing } from '../styles'
import { allstars2021 } from '../data/allStars'
import PostSeasonTeam from '../components/PostSeasonTeam'
import AllStarHeader from '../components/AllStarHeader'

const AllStars = () => {
  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      {/* <AllStarHeader allstar={true} /> */}
      {allstars2021.map((team) => <PostSeasonTeam team={team} />)}
    </div>
  )
}

AllStars.displayName = 'AllStars'

export default AllStars
