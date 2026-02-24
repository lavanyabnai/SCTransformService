'use client'

import * as React from 'react'
// import { ThemeProvider as NextThemesProvider } from 'next-themes'
 import  ClientThemeProvider  from '@/components/client-theme-provider'
import { ThemeProviderProps } from 'next-themes/dist/types'
import { TooltipProvider } from '@/components/ui/tooltip'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <ClientThemeProvider {...props}>
      <TooltipProvider>{children}</TooltipProvider>
    </ClientThemeProvider>
  )
}
