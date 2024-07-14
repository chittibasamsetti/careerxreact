import React from 'react'

export default function App17(props) {
    let result = props.fn(props.val)
  return (
    <div>Result is {result}</div>
  )
}