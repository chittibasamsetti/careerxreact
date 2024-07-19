
import React from 'react'

export default function App27() {
    const AppName = process.env.REACT_APP_NAME
    const Author = process.env.REACT_APP_AUTHOR
  return (
    <div>{AppName}-{Author}</div>
  )
}
