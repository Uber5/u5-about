import React from 'react'
import { About, LoggedErrors } from '../src'

const App = () => (
  <div>
    <h1>About</h1>
    <About
      details={{
        'Revision': REVISION,
        'Built at': new Date(Number(BUILT_AT)).toLocaleString(),
        'Built on': BUILT_ON
      }}
    />
    <h2>Error Logging</h2>
    <LoggedErrors />
  </div>
)

render(<App />, document.getElementById('app'))
