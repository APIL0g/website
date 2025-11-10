import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { headers, cookies } from "next/headers"
import { LanguageProvider, type Language } from "@/lib/language-context"

const _inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const _jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" })

export const metadata: Metadata = {
  title: "Apilog - Self-Hosted Analytics Platform",
  description:
    "Open-source analytics platform that runs locally. Collect and analyze your data with complete privacy and control.",
  generator: "v0.app",
  openGraph: {
    images: "/logo.png",
  },
  twitter: {
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialLanguage = await getInitialLanguageFromRequest()
  const htmlLanguageAttr = initialLanguage === "kr" ? "ko" : "en"

  return (
    <html lang={htmlLanguageAttr}>
      <head>
        <Script
          src="https://apilog.kr/apilog/embed.js"
          data-site-id="main"
          data-ingest-url="https://apilog.kr/api/ingest/events"
          strategy="beforeInteractive"
        />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider initialLanguage={initialLanguage}>{children}</LanguageProvider>
      </body>
    </html>
  )
}

async function getInitialLanguageFromRequest(): Promise<Language> {
  const cookieStore = await cookies()
  const cookieLanguage = cookieStore.get("apilog-language")?.value
  if (cookieLanguage === "en" || cookieLanguage === "kr") {
    return cookieLanguage
  }

  const headersList = await headers()
  const countryHeaderCandidates = [
    "x-vercel-ip-country",
    "x-country-code",
    "x-forwarded-country",
    "cf-ipcountry",
    "cloudfront-viewer-country",
  ]

  for (const headerName of countryHeaderCandidates) {
    const headerValue = headersList.get(headerName)
    if (headerValue && headerValue.toUpperCase() === "KR") {
      return "kr"
    }
  }

  const acceptLanguage = headersList.get("accept-language")
  if (acceptLanguage) {
    const normalized = acceptLanguage.toLowerCase()
    const prefersKorean = normalized
      .split(",")
      .map((segment) => segment.trim())
      .some((segment) => segment.startsWith("ko"))
    if (prefersKorean) {
      return "kr"
    }
  }

  return "en"
}
