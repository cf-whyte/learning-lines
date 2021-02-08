import React from 'react'

function ScriptMessages () {
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
      <div id="colMsg" className="column is-one-fifth">
        <div id="msgHelp"className="message is-info">
          <p className="message-header"><strong>How does it work?</strong><button className="delete" onClick={MsgHelpDeleteClick}></button></p>
          <p className="message-body">Select a character and scene, on the left, to practice. When you have said your line, click the <i>next</i> button. If you need some help, click the <i>line</i> button. Click the <i>back</i> button if you want to read the previous line.</p>
        </div>
        <div id="msgWhy" className="message is-success">
          <p className="message-header"><strong>Why use Learning Lines?</strong><button className="delete" onClick={MsgWhyDeleteClick}></button></p>
          <p className="message-body"><i>Learning Lines</i> provides an easy way to learn lines for a particular script and character. The aim is to learn lines through the web, faster than using a physical script.</p>
        </div>
      </div>
    </>
  )
}

export default ScriptMessages
