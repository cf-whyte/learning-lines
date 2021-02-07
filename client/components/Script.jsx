import React from 'react'

function Script () {
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification is-success">
            <div className="content">
              <p className="title">Tall tile</p>
              <p className="subtitle">With even more content</p>
              <div className="content">
              </div>
            </div>
          </article>
        </div>
      </div>

      <aside className="bd-docs-nav">
        <div className="tile-tall">
          <p className="menu-label"><strong>Characters</strong></p>
          <ul className="menu-list">
            <p className="menu-item"><a>Troy</a></p>
            <p className="menu-item"><a>Billie</a></p>
          </ul>
        </div>
      </aside>

      <div className="container is-fluid is-centered">
        <div className="columns">
          <div className="column">
            <div className="box">
              <p>Lame-o</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Script
