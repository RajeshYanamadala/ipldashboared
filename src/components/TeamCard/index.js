// Write your code here

import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, teamImageUrl, name} = teamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="team-list-card">
        <img src={teamImageUrl} alt={name} className="image-url" />
        <h1 className="heading-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
