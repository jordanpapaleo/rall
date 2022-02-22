export default function Results() {
  return (
    <div style={{
      display: 'flex',
      gap: '2rem',
      marginLeft: '10%',
      marginRight: '10%',
      justifyContent: 'space-between',
    }}>
      <div>
        <h2>2021 Renegades Results</h2>
        <div>
          <a href="https://dt5602vnjxv0c.cloudfront.net/portals/28550/docs/21rbracket.pdf" target="_blank" title="2021 Renegades Bracket">
            Bracket
          </a>
          <br />
          <img src="https://dt5602vnjxv0c.cloudfront.net/portals/28550/images/21rbracket.jpg" />
        </div>
      </div>

      <div style={{ borderLeft: '1px solid lightgray' }} />

      <div>
        <h2>2021 Hooligans Results</h2>
        <div>
          <a href="https://dt5602vnjxv0c.cloudfront.net/portals/28550/docs/21hbracket.pdf" target="_blank" title="2021 Hooligans Racket">
            Bracket
          </a>
          <br />
          <img src="https://dt5602vnjxv0c.cloudfront.net/portals/28550/images/21hbracket.jpg" />
        </div>
      </div>
    </div>
  )
}

Results.displayName = 'Results'

