
import React from 'react'

export default function App5(props) {
  return (
    <div>Hello {props.name}</div>
  )
}

App5.defaultProps = {
    name:"Mike"
}
