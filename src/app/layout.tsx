import NavBar from '~/components/layout/nav'
import {fontSans} from '~/components/ui/fonts'
import {siteConfig} from '~/constants/config'
import {cn} from '~/lib/utils'
import '~/styles/globals.css'

import Providers from '~/providers'

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: siteConfig.icons,
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
