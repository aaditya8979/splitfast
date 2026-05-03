import { ApplePwaSplash } from '@/app/apple-pwa-splash'
import { LocaleSwitcher } from '@/components/locale-switcher'
import { ProgressBar } from '@/components/progress-bar'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { env } from '@/lib/env'
import { TRPCProvider } from '@/trpc/client'
import type { Metadata, Viewport } from 'next'
import { NextIntlClientProvider, useTranslations } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'

import Link from 'next/link'
import { Suspense } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: 'SplitFast — Split Bills Instantly with Friends & Family',
    template: '%s · SplitFast',
  },
  description:
    'SplitFast is the smartest way to split bills with flatmates, friends, and travel buddies. UPI settlements, GST handling, and real-time sync.',
  openGraph: {
    title: 'SplitFast · Split Bills Instantly with Friends & Family',
    description:
      'SplitFast is the smartest way to split bills with flatmates, friends, and travel buddies. UPI settlements, GST handling, and real-time sync.',
    images: `/banner.png`,
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    images: `/banner.png`,
    title: 'SplitFast · Split Bills Instantly with Friends & Family',
    description:
      'SplitFast is the smartest way to split bills with flatmates, friends, and travel buddies. UPI settlements, GST handling, and real-time sync.',
  },
  appleWebApp: {
    capable: true,
    title: 'SplitFast',
  },
  applicationName: 'SplitFast',
  icons: [
    {
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

export const viewport: Viewport = {
  themeColor: '#4F46E5',
}

function Content({ children }: { children: React.ReactNode }) {
  const t = useTranslations()
  return (
    <TRPCProvider>
      <header className="fixed top-0 left-0 right-0 h-16 flex justify-between bg-white dark:bg-gray-950 bg-opacity-50 dark:bg-opacity-50 p-2 border-b backdrop-blur-sm z-50">
        <Link
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          href="/"
        >
          <h1 className="text-lg font-black tracking-tight text-foreground">
            Split<span className="text-primary">Fast</span>
          </h1>
        </Link>
        <div role="navigation" aria-label="Menu" className="flex">
          <ul className="flex items-center text-sm">
            <li>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="-my-3 text-primary"
              >
                <Link href="/groups">{t('Header.groups')}</Link>
              </Button>
            </li>
            <li>
              <LocaleSwitcher />
            </li>
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </header>

      <div className="pt-16 flex-1 flex flex-col">{children}</div>

      <footer className="mt-16 border-t border-border">
        {/* Gradient accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-primary via-indigo-400 to-secondary" />

        <div className="max-w-5xl mx-auto px-6 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
            {/* Left: Brand */}
            <div className="space-y-3">
              <Link href="/" className="inline-block group">
                <span className="text-xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                  Split<span className="text-primary">Fast</span>
                </span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                The smartest way to split bills with flatmates, friends, and travel buddies. No sign-up required.
              </p>
            </div>

            {/* Right: Links */}
            <div className="flex gap-12 text-sm">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider">Product</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><Link href="/groups" className="hover:text-primary transition-colors">My Groups</Link></li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider">Developer</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li><a href="https://github.com/aaditya8979" target="_blank" rel="noopener" className="hover:text-primary transition-colors">GitHub</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-muted-foreground">
            <span>© {new Date().getFullYear()} SplitFast · Built with ❤️ in India</span>
            <span>
              {t.rich('Footer.builtBy', {
                author: (txt) => (
                  <a href="https://github.com/aaditya8979" target="_blank" rel="noopener" className="font-medium text-foreground hover:text-primary transition-colors">
                    {txt}
                  </a>
                ),
                source: (txt) => (
                  <a href="https://github.com/aaditya8979" target="_blank" rel="noopener" className="font-medium text-foreground hover:text-primary transition-colors">
                    {txt}
                  </a>
                ),
              })}
            </span>
          </div>
        </div>
      </footer>
      <Toaster />
    </TRPCProvider>
  )
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
  const messages = await getMessages()
  return (
    <html lang={locale} suppressHydrationWarning>
      <ApplePwaSplash icon="/logo-with-text.png" color="#4F46E5" />
      <body className="min-h-[100dvh] flex flex-col items-stretch bg-slate-50 bg-opacity-30 dark:bg-background">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense>
              <ProgressBar />
            </Suspense>
            <Content>{children}</Content>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
