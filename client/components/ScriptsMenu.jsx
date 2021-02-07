import React from 'react'
import { Link } from 'react-router-dom'

function ScriptsMenu () {
  return (
    <>
      <p className="menu-label">
        <Link to='/scripts'>
          <a><strong>Scripts</strong></a>
        </Link>
      </p>
      <ul className="menu-list">
        <Link to='/scripts/thinning'>
          <li><a>Thinning</a></li>
        </Link>
        <Link to='/scripts/asyoulikeit'>
          <li><a>As You Like It</a></li>
        </Link>
        <Link to='/scripts/achristmascarol'>
          <li><a>A Christmas Carol</a></li>
        </Link>
      </ul>
    </>
  )
}

export default ScriptsMenu
