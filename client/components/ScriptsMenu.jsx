import React, { useState } from 'react'

import script from './json/Thinning.json'

function ScriptsMenu () {
  const [selected, setSelected] = useState(script.characters[0])

  function handleClick (evt) {
    setSelected(evt.target.text)
  }

  return (
    <>
      <ul className="menu-list">
        <span><strong>CHARACTERS</strong></span>
        {
          script.characters.map(char => {
            return (
              <>
                <li className={
                  char === selected ? 'is-active' : ''
                } onClick={handleClick}>
                  <a key={char} value={char}>{char}</a>
                </li>
              </>
            )
          })
        }
      </ul>
    </>
  )
}

export default ScriptsMenu