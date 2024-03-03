import {ThemeProvider as NextThemesProvider} from 'next-themes'
import {type ThemeProviderProps} from 'next-themes/dist/types'

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      storageKey = 'theme'
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
