import React from 'react'
import { Route } from 'react-router-dom'

import Landing from './Landing'
import Tabs from './Tabs'
import ScriptSelect from './ScriptSelect'
import Header from './base/Header'
import Script from './Script'

function App () {
  return (
    <>
      <Route exact path='/' component={Landing}/>
      <Route path='/' component={Header}/>
      <Route exact path='/scripts' component={ScriptSelect}/>
      <Route path='/scripts/script' component={Script}/>
      <Route path='/tabs' component={Tabs}/>
      {/* <Route path='/scripts/thinning' component={Thinning}/> */}
      {/* <Route path='/scripts/asyoulikeit' component={AsYouLikeIt}/> */}
      {/* <Route path='/scripts/achristmascarol' component={AChristmasCarol}/> */}
    </>
  )
}

export default App
