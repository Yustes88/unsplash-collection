import {handlers} from '~/lib/auth'
import GoogleProvider from 'next-auth/providers/google'

export const {GET, POST} = handlers

export const OPTION = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
}
