import React from 'react'

export default function App14(props) {
    const result = props.fn(props.val)
  return (
    <div>
        result is {result}
    </div>
  )
}
