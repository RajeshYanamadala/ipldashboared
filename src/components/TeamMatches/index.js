// Write your code here
import {Component} from 'react'

import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: []}

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updateData = {
      teamBannerUrl: data.team_banner_url,
    }
    this.setState({teamMatchesData: updateData})
  }

  renderTeamMatch = () => {
    const {teamMatchesData} = this.state

    const {teamBannerUrl} = teamMatchesData
    return (
      <div>
        <img src={teamBannerUrl} alt="img" />
      </div>
    )
  }

  render() {
    return <div>{this.renderTeamMatch()}</div>
  }
}

export default TeamMatches
