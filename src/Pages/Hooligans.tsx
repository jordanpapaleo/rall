import React from 'react'
import { spacing } from '../styles'
import { rendegades2021, hooligans2021 } from '../data/allStars'
import PostSeasonTeam from '../components/PostSeasonTeam'
// import AllStarHeader from '../components/AllStarHeader'

const Hooligans = () => {
  return (
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      {/* <AllStarHeader allstar={false} /> */}
      <PostSeasonTeam team={hooligans2021} />
      <PostSeasonTeam team={rendegades2021} />
    </div>
  )
}

Hooligans.displayName = 'Hooligans'

export default Hooligans
