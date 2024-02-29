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
          defaultTheme="light"
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

/* To organize our code better,  create a 'provider' folder. Inside that folder, create a file named 'theme-provider.tsx' and place the relevant code there.

Additionally, in the 'provider' folder, create an 'index.ts' file. Inside 'index.ts', export the 'ThemeProvider' from 'theme-provider.tsx' using the following syntax:

export { default as ThemeProvider } from './theme-provider';

later on there will be more providers so its better we keep it in seperate folder  */
