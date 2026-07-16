import React from 'react'
import { LiveEx } from '../components/example/LiveEx'
import Usage from './Usage'

const page = () => {
  return (
    <main className='mx-auto max-w-[450px] mt-20'>
      <LiveEx/>
      <Usage/>
    </main>
  )
}

export default page