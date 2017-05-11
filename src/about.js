import React from 'react'

export default ({ details }) => (
  <ul>
    {
      Object.keys(details).map(key => (
        <li key={key}>{ key }: { details[key] }</li>
      ))
    }
  </ul>
)
