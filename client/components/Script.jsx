import React from 'react'

function Script () {
  const thinScript = require('./json/Thinning.json')
  console.log(thinScript.scenes[0]['scene-num'])

  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-8">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-primary">
                <p className="title">Vertical...</p>
                <p className="subtitle">Top tile</p>
              </article>
              <article className="tile is-child notification is-warning">
                <p className="title">...tiles</p>
                <p className="subtitle">Bottom tile</p>
              </article>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">Middle tile</p>
                <p className="subtitle">With an image</p>
                <figure className="image is-4by3">
                </figure>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
              <p className="title">Wide tile</p>
              <p className="subtitle">Aligned with the right tile</p>
              <div className="content">
              </div>
            </article>
          </div>
        </div>
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
