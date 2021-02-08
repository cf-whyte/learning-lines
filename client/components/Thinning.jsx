import React from 'react'

import ScriptsMenu from './ScriptsMenu'
import ScriptMessages from './ScriptMessages'
import ScenesMenu from './ScenesMenu'
const thin = require('./json/Thinning.json')

function Thinning () {
  const currLineNum = 0
  const prevLineNum = currLineNum - 1

  const prevLine = document.getElementById('prevLine')
  const userLine = document.getElementById('userLine')

  const sceneSelcted = 0

  // function SceneClick () {
  //   return (selected.value)
  // }

  function LineClick () {
    if (!userLine.classList.contains('is-hidden')) {
      return (
        document.getElementById('userLine').classList.remove('is-hidden')
      )
    } else {
      return (
        document.getElementById('userLine').classList.add('is-hidden')
      )
    }
  }
  function NextClick () {
    return (
      document.getElementById('prevLine').textContent = thin.scenes[sceneSelcted].conversations[0].lines[2].text
    )
  }
  function BackClick () {
    if (prevLine.textContent === thin.scenes[sceneSelcted].conversations[0].lines[0].text || prevLine.textContent === thin.scenes[0].conversations[0].lines[1].text) {
      return (alert('Cannot go back any further.'))
    } else {
      return (
        prevLine.textContent = thin.scenes[sceneSelcted].conversations[0].lines[prevLineNum - 2].text
      )
    }
  }

  return (
    <>
      <div className="is-flex">
        <aside className="menu p-2">
          <ScriptsMenu/>
          <ScenesMenu/>
        </aside>
        <div className="container is-fluid p-3">
          <div className="columns is-centered">
            <ScriptMessages/>

            <div className="column">
              <div className="box">
                <div className="subtitle">
                  <p id="prevChar">{thin.scenes[0].conversations[0].lines[0].char}</p>
                </div>
                <div className="content">
                  <p id="prevLine">{thin.scenes[0].conversations[0].lines[0].text}</p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="box">
                <div className="subtitle">
                  <p id="userChar">{thin.scenes[0].conversations[0].lines[1].char}</p>
                </div>
                <div className="content">
                  <p id="userLine" className="is-hidden">&quot;{thin.scenes[0].conversations[0].lines[1].text}&quot;</p>
                </div>
              </div>
            </div>

            <div className="column">
              <div className="box">
                <div className="content">
                  <button className="button is-danger is-outlined is-rounded" onClick={BackClick}>Back</button>
                  <button className="button is-info is-outlined is-rounded" onClick={LineClick}>Line</button>
                  <button className="button is-success is-outlined is-rounded" onClick={NextClick}>Next</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Thinning
