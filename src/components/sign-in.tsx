import {signIn} from '~/lib/auth'
import {Button} from './ui/button'

export function SignIn() {
  return (
    <form
      action={async () => {
        'use server'
        await signIn('google')
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  )
}
