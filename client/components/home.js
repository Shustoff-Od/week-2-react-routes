import React from 'react'
import { Switch, Route} from 'react-router-dom'  
import Header from './header'

import MainComp from './main'
import Dashboard from './dashboard'
import Users from './users'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          {/* add your routes here */}
          <Switch>
            <Route exact path="/dashboard/main" component={() => <MainComp />} />
            <Route exact path="/dashboard/profile/:user" component={() => <Users />} />
            <Route exact path="/dashboard/" component={() => <Dashboard />} />
          </Switch>
          
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
