import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/team-matches/:id" component={TeamMatches} />
    </Switch>
  </>
)

export default App
