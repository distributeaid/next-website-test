import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/Nav/navBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Distribute Aid',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        
        {children}</body>
    </html>
  )
}
