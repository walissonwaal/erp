import React from 'react'
import { PrivateRoute } from '@/src/components'

export default function () {
  return (
    <PrivateRoute>
      <div>
        <h1>Dashboard</h1>
      </div>
    </PrivateRoute>
  )
}
