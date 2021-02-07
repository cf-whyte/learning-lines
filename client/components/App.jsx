import React from 'react'
import { Route } from 'react-router-dom'

import Landing from './Landing'
import Tabs from './Tabs'

function App () {
  return (
    <>
      <Route exact path='/' component={Landing}/>
      <Route exact path='/tabs' component={Tabs}/>
    </>
  )
}

export default App
