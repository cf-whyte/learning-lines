import React from 'react'

import ScriptsMenu from './ScriptsMenu'

function Script () {
  // const thinScript = require('./json/Thinning.json')
  // const sceneOneConvB = thinScript.scenes[0].conversations[1]

  return (
    <>
      <aside>
        <ScriptsMenu/>
        <div className="dropdownlist">

        </div>
      </aside>
    </>
  )
}

export default Script
