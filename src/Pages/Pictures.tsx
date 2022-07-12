import { timesTball, timesMajor, timesJunior, timesFarm, timesAAA, timesAA } from '../data/pictures'
export default function Pictures() {
  return (
    <div style={{
      marginLeft: '10%',
      marginRight: '10%',
    }}>
      <h1>Two ways to order</h1>

      <ol style={{ fontSize: '1.25rem' }}>
        <li>Text RALL-2022 to 90738. This will send all the information to your mobile device via text.</li>
        <li>Go to <a href="https://galleries.photoday.io">https://galleries.photoday.io</a> and use the code RALL-2022. (This link may not be live yet)</li>
      </ol>

      <h1>Schedule by Division and Team</h1>

      <h2>Farm</h2>
      {timesFarm.map((time, i) => {
        const [division, team, startTime] = time.split(',')
        return (
          <TimeBlock key={i} division={division} team={team} startTime={startTime} />
        )
      })}

      <h2>TBall</h2>
      {timesTball.map((time, i) => {
        const [division, team, startTime] = time.split(',')
        return (
          <TimeBlock key={i} division={division} team={team} startTime={startTime} />
        )
      })}

      <h2>AA</h2>
      {timesAA.map((time, i) => {
        const [division, team, startTime] = time.split(',')
        return (
          <TimeBlock key={i} division={division} team={team} startTime={startTime} />
        )
      })}

      <h2>AAA</h2>
      {timesAAA.map((time, i) => {
        const [division, team, startTime] = time.split(',')
        return (
          <TimeBlock key={i} division={division} team={team} startTime={startTime} />
        )
      })}

      <h2>Major</h2>
      {timesMajor.map((time, i) => {
        const [division, team, startTime] = time.split(',')
        return (
          <TimeBlock key={i} division={division} team={team} startTime={startTime} />
        )
      })}

      <h2>Junior</h2>
      {timesJunior.map((time, i) => {
        const [division, team, startTime] = time.split(',')
        return (
          <TimeBlock key={i} division={division} team={team} startTime={startTime} />
        )
      })}
    </div>
  )
}

const TimeBlock = ({ division, team, startTime }) => (
  <div style={{ display: 'flex', marginBottom: 10 }}>
    <div style={{ width: 170, marginRight: 20 }}>
      {/* <strong>{division}: </strong> */}
      <div style={{ textTransform: 'capitalize' }}>{team}</div>
    </div>
    <div>
      {startTime}
    </div>
  </div>
)

Pictures.displayName = 'Pictures'

