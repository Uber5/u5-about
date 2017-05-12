import React from 'react'
import getErrors from './get-errors'

export default () => {
  const errors = getErrors()

  const renderError = (err, index) => {

    let at = new Date(err.at)

    if (at.toLocaleString) {
      at = at.toLocaleString()
    } else {
      at = "" + at
    }

    return <li key={index}>{err.message}, {at}</li>
  }

  return errors.length
  ?
    <ul>
      {
        errors.map(renderError)
      }
    </ul>
  : <div>No errors recorded.</div>
}
