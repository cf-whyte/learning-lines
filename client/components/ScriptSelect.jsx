import React from 'react'
import { Link } from 'react-router-dom'

const scripts = require('./json/Scripts.json').scripts

function ScriptSelect () {
  function MsgHelpDeleteClick () {
    const msgWhy = document.getElementById('msgWhy')
    const msgHelp = document.getElementById('msgHelp')
    if (msgWhy.classList.contains('is-hidden')) {
      return (EmptyCheck())
    }
    return (msgHelp.classList.add('is-hidden'))
  }

  function MsgWhyDeleteClick () {
    const msgWhy = document.getElementById('msgWhy')
    const msgHelp = document.getElementById('msgHelp')
    if (msgHelp.classList.contains('is-hidden')) {
      return (EmptyCheck())
    }
    return (msgWhy.classList.add('is-hidden'))
  }

  function EmptyCheck () {
    const colMsg = document.getElementById('colMsg')
    return (colMsg.classList.add('is-hidden'))
  }
  return (
    <>
      <div className="container p-3">
        <div className="columns is-centered">
          <div id="colMsg" className="column is-one-fifth">
            <div id="msgHelp" className="message is-info has-background-primary-light">
              <p className="message-header"><strong>What to do now?</strong><button className="delete" onClick={MsgHelpDeleteClick}></button></p>
              <p className="message-body">Read through the script descrtiptions and then select a script to learn lines from. Simply click on the script title or a character to continue.</p>
            </div>
            <div id="msgWhy" className="message is-success">
              <p className="message-header"><strong>Why use Learning Lines?</strong><button className="delete" onClick={MsgWhyDeleteClick}></button></p>
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
