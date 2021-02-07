import React, { useState } from 'react'

const plays = [
  'Thinning',
  'As You Like It',
  'A Chrismas Carol'
]

function Tabs () {
  const [selected, setSelected] = useState(plays[0])

  function handleClick (evt) {
    console.log(evt.target.text)
    setSelected(evt.target.text)
  }

  return (
    <>
      <div className="tabs is-boxed">
        <ul>
          {
            plays.map(play => {
              return (
                <li key={play} className={
                  play === selected ? 'is-active' : ''
                } onClick={handleClick}>
                  <a>{play}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Tabs
