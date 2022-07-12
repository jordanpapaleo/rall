export default function PostSeasonTeam({ team }) {
  return (
    <div style={{ marginBottom: '3rem', paddingBottom: '3rem' }}>
      <hr />
      <h2><span style={{ fontSize: '2rem' }}>{team.season} {team.name}</span> {team.results && <strong> ({team.results})</strong>}</h2>

      <h4 style={{ paddingBottom: 0 }}><strong>Head coach</strong>: {team.headCoach}</h4>
      <h5><strong>Assistant Coaches</strong>: {team.coaches.join(', ')}</h5>
      <h3 style={{ fontSize: '1.5rem' }}>Players</h3>
      <div style={{ columns: '100px 3', fontSize: '1.25rem' }}>
        {team.players.map((player) => <div>{player}</div>)}
      </div>
      {team.teamImage && (
        <div style={{ marginTop: '2rem' }}>
          <img src={team.teamImage} style={{ width: '100%', boxShadow: 'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px' }} />
          {team.teamImageCaption && (
            <figcaption>{team.teamImageCaption}</figcaption>
          )}
        </div>
      )}
    </div>
  )
}
