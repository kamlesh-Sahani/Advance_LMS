import { Button } from '@/src/components/ui/button'
import { redirect } from 'next/navigation'
import React from 'react'

const Home = () => {
  return (
    <div>
      home
      {redirect("/user")}
    </div>
  )
}

export default Home