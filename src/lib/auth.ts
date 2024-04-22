import NextAuth, {AuthOptions} from 'next-auth'
import Google from 'next-auth/providers/google'

import {PrismaAdapter} from '@auth/prisma-adapter'
import {PrismaClient} from '@prisma/client'
import {env} from '~/env.mjs'

const prisma = new PrismaClient()

const options: NextAuthOptions = {}

export const {handlers, signIn, signOut, auth} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  callbacks: {
    signIn: async (user, account, profile) => {
      if (
        account.provider === 'google' &&
        profile.verified_email === true &&
        profile.email.endsWith('@example.com')
      ) {
        return Promise.resolve(true)
      } else {
        return Promise.resolve(false)
      }
    },
  },
  secret: env.AUTH_SECRET as string,
  session: {
    strategy: 'database',
    maxAge: 30 * 24 * 60 * 60,
  },
})
