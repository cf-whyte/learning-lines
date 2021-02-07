import React from 'react'
import { Route } from 'react-router-dom'

import Landing from './Landing'
import Tabs from './Tabs'
import ScriptSelect from './ScriptSelect'
import Header from './base/Header'

function App () {
  return (
    <>
      <Route exact path='/' component={Landing}/>
      <Route path='/' component={Header}/>
      <Route path='/scripts' component={ScriptSelect}/>
      <Route path='/tabs' component={Tabs}/>
    </>
  )
}

export default App
