import React, { useState } from 'react'

import script from './json/Thinning.json'

function ScenesMenu () {
  const [selected, setSelected] = useState(script.characters[0])

  function handleClick (evt) {
    setSelected(evt.target.text)
  }

  return (
    <>
      <ul className="menu-list">
        <span><strong>SCENES</strong></span>
        {
          script.scenes.map(scene => {
            return (
              <>
                <li className={
                  scene['scene-num'] === selected ? 'is-active' : ''
                } onClick={handleClick}>
                  <a key={scene['scene-num']} value={scene['scene-num'] - 1}>Scene {scene['scene-num']}</a>
                </li>
              </>
            )
          })
        }
      </ul>
    </>
  )
}

export default ScenesMenu
