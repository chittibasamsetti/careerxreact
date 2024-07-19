import React from 'react'
import {memo} from 'react'
function ExpComp(props) {
    console.log("ExpComp Rendered ",props.count," times")
  return (
    <div>ExpComp</div>
  )
}
export default memo(ExpComp)