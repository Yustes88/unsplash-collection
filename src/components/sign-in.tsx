'use client'

import {signIn, signOut, useSession} from 'next-auth/react'
import {Button} from './ui/button'

export function SignIn() {
  const {data: session} = useSession()

  if (session) {
    return (
      <>
        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }

  return (
    <>
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  )
}
