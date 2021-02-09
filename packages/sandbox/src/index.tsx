import React from 'react'
import ReactDOM from 'react-dom'

console.log('Hello from tsx!')

ReactDOM.render(
  <div
    sx={{
      bg: '--background',
      color: '--text',
    }}
  >
    Hello
  </div>,
  document.getElementById('root')
)
