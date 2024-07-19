import React, { useContext } from 'react'
import { UserContext } from './App25'
import Grandchild from './Grandchild'
export default function Child() {
    const {email} = useContext(UserContext)
  return (
    <div>This is Child Component: {email}
    </div>
  )
}