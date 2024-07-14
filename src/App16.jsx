import React from 'react'

export default function App16(props) {
    let result = props.fn(props.val)
  return (
    <div>Result is {result}</div>
  )
}