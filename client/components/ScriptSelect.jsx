import React from 'react'
import { Link } from 'react-router-dom'

const scripts = require('./json/Scripts.json').scripts

function ScriptSelect () {
  return (
    <>
      <div className="container p-3">
        <div className="columns is-centered">
          <div className="column is-one-fifth">
            <div className="message is-info has-background-primary-light">
              <p className="message-header"><strong>What to do now?</strong></p>
              <p className="message-body">Read through the script descrtiptions and then select a script to learn lines from. Simply click on the script title or a character to continue.</p>
            </div>
            <div className="message is-success">
              <p className="message-header"><strong>Why use Learning Lines?</strong></p>
              <p className="message-body"><i>Learning Lines</i> provides an easy way to learn lines for a particular script and character. The aim is to learn lines through the web, faster than using a physical script.</p>
            </div>
          </div>
          {
            scripts.map(script => {
              return (
                <>

                  <div key={script.title} className="column">
                    <div className="box">
                      <Link to={'/scripts/' + script.title.toLowerCase().replaceAll(' ', '')}>
                        <p className="title">{script.title}</p>
                      </Link>
                      <p><strong>By:</strong> {script.author}</p>
                      <p><strong>Description:</strong> {script.description}</p>
                      <p><strong>Tickets:</strong> Find tickets to the show <a href={script.tickets} target="_blank" rel="noreferrer">here</a>.</p>
                      <p><strong>Characters:</strong> </p>
                      <div className="buttons is-centered">
                        {
                          script.characters.map(character => {
                            return (
                              <>
                                <br/>
                                <Link to={'/scripts/' + script.title.toLowerCase().replaceAll(' ', '') + '/' + character.toLowerCase()}>
                                  <button key={character} className="button is-primary is-outlined is-rounded">
                                    {character}
                                  </button>
                                </Link>
                              </>
                            )
                          })
                        }
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default ScriptSelect
