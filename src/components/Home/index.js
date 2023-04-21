// Write your code here

import {Component} from 'react'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {teamData: []}

  componentDidMount() {
    this.getIplTeamsData()
  }

  getIplTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updateData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamData: updateData})
  }

  render() {
    const {teamData} = this.state
    return (
      <div className="ipl-dashboard-app">
        <div className="ipl-logo-heading-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <ul className="under-list-container">
          {teamData.map(eachTeamData => (
            <TeamCard key={eachTeamData.id} teamDetails={eachTeamData} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
