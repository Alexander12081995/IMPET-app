import './globals.css'
import './onest.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from "next/head";
import React from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'IMPET',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <Head>
      <meta name="viewport" content="width=1240, initial-scale=1.0" />
    </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}