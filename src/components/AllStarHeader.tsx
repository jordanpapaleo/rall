export default function AllStarHeader({ allstar }) {
  const teams = allstar
    ? 'All Star'
    : 'Hooligans and Renegades'
  return (
    <h1>The 2021 Reno American Little League {teams} Teams</h1>
  )
}
