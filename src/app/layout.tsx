import {ThemeProvider} from '~/components/ui/themeProvider'
import NavBar from '~/components/ui/NavBar'
import {fontSans} from '~/components/ui/fonts'
import {siteConfig} from '~/constants/config'
import {cn} from '~/lib/utils'
import '~/styles/globals.css'

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  icons: siteConfig.icons,
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
