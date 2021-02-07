import React from 'react'

function Header () {
  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body">
          <h1 className="title is-size-2 is-italic mb-0">
                Learning Lines
          </h1>
          <h2 className="is-size-7 mt-0 is-family-code has-text-weight-semi-bold"><a href='https://github.com/cf-whyte/learning-lines/' target='_blank' rel='noreferrer'>github</a></h2>
        </div>
        <div className="hero-footer">
          <button className="button is-medium is-primary">Back</button>
        </div>
      </div>
    </>
  )
}

export default Header
