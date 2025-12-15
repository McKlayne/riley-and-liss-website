import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gestational Carrier Needed - Riley & Liss",
  description:
    "Riley and Liss are looking for a gestational carrier to help grow their family. $55,000 stipend offered.",
  openGraph: {
    title: "Gestational Carrier Needed - Riley & Liss",
    description:
      "Riley and Liss are looking for a gestational carrier to help grow their family. $55,000 stipend offered.",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#FDF8F3]">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
