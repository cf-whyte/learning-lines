import React from 'react'
import { Link } from 'react-router-dom'

function Landing () {
  return (
    <>
      <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container is-fluid">
            <div className="columns is-centred">
              <div className="column is-four-fifths">
                <h1 className="title is-size-1 is-italic">
                Learning Lines
                </h1>
                <h2 className="subtitle is-size-3 is-italic">
                A lines learning tool.
                </h2>
              </div>
              <div className="column p-6">
                <Link to="/scripts">
                  <button className="button subtitle is-primary">
                    Start Learning!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing
