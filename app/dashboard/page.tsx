import React, { Suspense } from 'react'
import Welcome from './welcome/page'
import Loading from '../components/Loading'
export default function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      <Welcome />
 
    </Suspense>
  )
}
